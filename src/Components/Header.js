import { Outlet, NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Header () {
  const activeStyle = {
    color: '#0030EE',
    fontWeight: '600',
    borderBottom: '3px solid #0030EE'
  }
  
  return (
    <>
      <HeaderWrapper>
        <Logo>
          <NavLink to="/"><img src="./csee.jpg" alt="csee logo" style={{width: "10rem"}}/></NavLink>
        </Logo>
        <Menu>
          <MenuList><NavLink to="/" style={({isActive}) => (
            isActive ? activeStyle : undefined
          )}>HOME</NavLink></MenuList>
          <MenuList><NavLink to="/reserve" style={({isActive}) => (
            isActive ? activeStyle : undefined
          )}>조회 및 예약하기</NavLink></MenuList>
          <MenuList><NavLink to="/mypage" style={({isActive}) => (
            isActive ? activeStyle : undefined
          )}>나의 예약 내역</NavLink></MenuList>
        </Menu>
        <Log>로그아웃</Log>
      </HeaderWrapper>
      <Outlet />
    </>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 10vh;

  border-bottom: solid 1px #ECECEC;
`

const Logo = styled.div`
  margin: 1rem;
  margin-left: 2rem;
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 50%;

  font-size: 16px;
`

const MenuList = styled.div`
  margin: 1rem;
  a {
    text-decoration: none;
    color: black;
    font-weight: 500;

    &:hover {
      color: #527CFF;
      font-weight: 600;
    }
  }
`

const Log = styled.button`
  margin: 2rem;
  width: 5rem;
  height: 2rem;
  background-color: #ECECEC;
  border: 1px solid #ECECEC;
  border-radius: 8px;

  font-size: 16px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    background-color: #D4D4D4;
    border-color: #D4D4D4;
  }
`

export default Header;

// 밑으로 갈수록 연해짐
// white
// #A6CACA
// #C7DFDF
// #E0EFEF
// #FAFFFF

// #ECECEC
// #D4D4D4

// 밑으로 갈수록 진해짐
// blue
// #527CFF
// #2051FF
// #0030EE
// #0028D5