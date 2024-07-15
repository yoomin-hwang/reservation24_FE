import { Outlet } from "react-router-dom";
import styled from "styled-components";

const ReservationPage = () => {
  return (
    <div>
      <Outlet />
      <ReservationWrapper>
        <Title>
          조회 및 예약하기
        </Title>
        <ContentsWrapper>
          <RoomWrapper>
          </RoomWrapper>
          <ReserveWrapper>
          </ReserveWrapper>
        </ContentsWrapper>
      </ReservationWrapper>
    </div>
  );
};

export default ReservationPage;

const ReservationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const RoomWrapper = styled.div``

const ReserveWrapper = styled.div``

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