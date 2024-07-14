import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ReservationTable from "../Components/ReservationTable";

function MainPage () {
  return (
    <div>
      <Outlet />
      <MainWrapper>
        <Title>
          HOME
        </Title>
        <ExplainWrapper>
          <SubTitle>
            전산전자공학부 강의실 대여 시스템
          </SubTitle>
          <Explain>
            1&#41; 한동메일로 로그인하여 대여신청 가능합니다.<br/>
            2&#41; HOME에서는 본인의 예약 내역을 확인할 수 있습니다.<br/>
            3&#41; 조회 및 예약하기에서 강의실과 예약일시, 목적 등을 입력하고 강의실을 예약합니다. 'Calendar'를 클릭하여 강의실별 예약현황을 확인할 수 있습니다.<br/>
            4&#41; 예약신청이 승인되면 강의실을 사용할 수 있습니다. 이용시간을 준수하고 사용 후 기구 및 집기를 정리해 주세요.<br/>
            5&#41; 수업 외 목적의 학생 모임인 경우&#40;TA세션, 팀행사, 동아리 등&#41; 지도교수님이 전산전자공학부 소속인 경우에 한해서 강의실 대여가 가능합니다.<br/>
          </Explain>
          <Explain>
            ※ 모든 강의실은 수업이 우선이며, 대여가 된 강의실이라도 수업을 할 경우 대여가 취소될 수 있습니다.<br/>
            ※ 방학 중 강의실 예약은 16주차 월 &#40;6/17&#41; 오전 10시부터 가능합니다.
          </Explain>
          <Contacts>
            <TopC>
              [문의] 학부사무실 054-260-1378, 1414
            </TopC>
            <BottomC>
              [야간·휴일 문 개방] 정문 경비실 054-260-1110
            </BottomC>
          </Contacts>
        </ExplainWrapper>
        <ReservationTable />
      </MainWrapper>
    </div>
  );
};

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

const ExplainWrapper = styled.div`
  width: 40%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const Explain = styled.div`
  width: 100%;
  margin: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

const Contacts = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TopC = styled.div`
  font-size: 18px;
`

const BottomC = styled.div`
  font-size: 16px;
`

export default MainPage;