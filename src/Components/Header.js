import { Outlet, Link } from 'react-router-dom';
import styled from 'styled-components';

function Header () {
  return (
    <>
      <HeaderWrapper>
        <Logo>
          <img src="./" alt="csee logo" />
        </Logo>
        <Menu>
          <MenuList><Link to="/">HOME</Link></MenuList>
          <MenuList><Link to="/reserve">조회 및 예약하기</Link></MenuList>
          <MenuList><Link to="/mypage">나의 예약 내역</Link></MenuList>
        </Menu>
        <Log>LOGOUT</Log>
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

  border-bottom: solid 1px #C7DFDF;
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
      font-weight: 600;
    }
  }
`

const Log = styled.button`
  margin: 2rem;
  width: 6rem;
  height: 2rem;
  background-color: #E0EFEF;
  border: 1px solid #C7DFDF;
  border-radius: 8px;

  font-size: 16px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    border-color: #A6CACA;
  }
`

export default Header;

// 밑으로 갈수록 연해짐
// white
// #A6CACA
// #C7DFDF
// #E0EFEF
// #FAFFFF

// 밑으로 갈수록 진해짐
// blue
// #527CFF
// #2051FF
// #0030EE
// #0028D5