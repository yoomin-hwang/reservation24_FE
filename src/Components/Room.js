import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

import { getRoomInfoAPI } from "../API/AxiosAPI";
import { AvailableRooms, ReservationData } from "../Atom";

const Room = ({ id }) => {
  // mockup data
  // const [timeBlock, setTimeBlock] = useState([1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0]);

  const [roomInfo, setRoomInfo] = useState({ name: "", capacity: 0, image: "", available: [] });
  const [reserveInfo, setReserveInfo] = useRecoilState(ReservationData);
  const [rooms, setRooms] = useRecoilState(AvailableRooms);

  const activeStyle = {
    backgroundColor: '#ECECEC',
    color: 'red'
  };

  const getRoomInfo = async () => {
    try {
      const response = await getRoomInfoAPI(id);
      setRoomInfo(response);
      console.log(response.available);
    } catch (err) {
      console.log(err);
    }
  };

  const onRoomClick = (id) => {
    setReserveInfo({ ...reserveInfo, roomId: id });
    console.log(reserveInfo);
  };

  useEffect(() => {
    getRoomInfo();
  }, []);

  return (
    <RoomWrapper onClick={() => onRoomClick(id)} >
      <img src={roomInfo.image} alt={roomInfo.name} style={{ height: "5rem" }} />
      <RoomInfo>
        <RoomName>{roomInfo.name}</RoomName>
        <Label>수용 인원: {roomInfo.capacity}</Label>
        <RoomAvailableWrapper>
          <Label>이용 가능 시간</Label>
          <RoomAvailable>
            {/* {roomInfo.available.map((available, index) => (
              <Time key={index} $available={available} />
            ))} */}
          </RoomAvailable>
        </RoomAvailableWrapper>
      </RoomInfo>
    </RoomWrapper>
  );
};

const RoomWrapper = styled.div`
  width: 100%;
  height: auto;
  
  margin-bottom: 1rem;
  padding: 1rem;

  border: 1px solid #ECECEC;
  border-radius: 8px;
  box-shadow: 0px 20px 25px -5px rgba(0, 0, 0, 0.10), 0px 8px 10px -6px rgba(0, 0, 0, 0.10);

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    background-color: #ECECEC;
  }
`;

const RoomAvailableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const RoomInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

const RoomName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const Label = styled.div`
  margin-bottom: 0.5rem;
`;

const RoomAvailable = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2px;
`;

const Time = styled.span`
  height: 1rem;
  width: 0.5rem;
  background-color: ${(props) => (props.$available === 1 ? "#A9A9A9" : "#D3D3D3")};
`;

export default Room;
