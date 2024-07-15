import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ReservationTable from "../Components/ReservationTable";

function MyReservationPage () {
  return (
    <div>
      <Outlet />
      <MyReservationWrapper>
        <Title>
          MY PAGE
        </Title>
        <ContentsWrapper>
          <SubTitle>
            나의 예약 내역
          </SubTitle>
          <ReservationTable />
        </ContentsWrapper>
      </MyReservationWrapper>
    </div>
  );
};

const MyReservationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const ContentsWrapper = styled.div`
  
`

const Title = styled.div`
  width: 85%;
  margin: 3rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;

  font-size: 45px;
`

const SubTitle = styled.div`
  width: 100%;
  text-align: center;
  font-size: 25px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export default MyReservationPage;