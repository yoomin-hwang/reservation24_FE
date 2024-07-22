import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import Room from "../Components/Room";
import ReserveForm from "../Components/ReserveForm";
import { AvailableRooms } from "../Atom";

const ReservationPage = () => {
  const [room, setRoom] = useState([]);
  const rooms = useRecoilValue(AvailableRooms);

  useEffect(() => {
    fetch("/Data/room.json")
      .then((res) => res.json())
      .then((data) => {
      setRoom(data);
    });
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
            {room.map((room) => (
              <Room key={room.id} id={room.id} />
            ))}
            {/* {rooms.map((room) => (
              <Room key={room.id} id={room.id} />
            ))} */}
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
  padding: 6rem 2.5rem;
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