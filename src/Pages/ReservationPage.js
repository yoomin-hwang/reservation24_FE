import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";

import Room from "../Components/Room";
import ReserveForm from "../Components/ReserveForm";
import { AvailableRooms } from "../Atom";
import { getAllRoomsAPI } from "../API/AxiosAPI";

const ReservationPage = () => {
  // const [room, setRoom] = useState([]);
  // useEffect(() => {
  //   fetch("/Data/room.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //     setRoom(data);
  //   });
  // }, []);
  
  const [rooms, setRooms] = useRecoilState(AvailableRooms);

  const getAllRooms = async () => {
    try {
      const response = await getAllRoomsAPI();
      console.log(response);
      setRooms(response);
    } catch(err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getAllRooms();
  }, []);
  
  return (
    <div>
      <Outlet />
      <ReservationWrapper>
        <Title>
          조회 및 예약하기
        </Title>
        <ContentsWrapper>
          {/* Room Info Area */}
          <RoomsWrapper>
            {/* {room.map((room) => (
              <Room 
                key={room.id} 
                id={room.id} />
            ))} */}
            {Array.isArray(rooms) && rooms.length > 0 ? (
            rooms.map((room) => (
              <Room key={room.id} id={room.id} />
            ))
          ) : (
            <p>No rooms available</p> // rooms가 빈 배열일 때 사용자에게 메시지 제공
          )}
          </RoomsWrapper>
          {/* Reservation Area */}
          <ReserveForm />
        </ContentsWrapper>
      </ReservationWrapper>
    </div>
  );
};

export default ReservationPage;

const ReservationWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const ContentsWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
`

const RoomsWrapper = styled.div`
  width: 45%;
  height: 65vh;

  margin: 1rem;
  padding: 4rem 2.5rem;
  border = 1px solid #ECECEC;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: scroll;
`

const Title = styled.div`
  width: 85%;
  margin: 3rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  font-size: 45px;
  font-weight: 600;
`