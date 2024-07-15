import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

function Header () {
  return (
    <>
      <HeaderWrapper>
        <Logo>
          <img src="./" alt="csee logo" />
        </Logo>
        <Menu>
          <MenuList>HOME</MenuList>
          <MenuList>조회 및 예약하기</MenuList>
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

  border-bottom: solid 1px #BDBDBD;
`

const Logo = styled.div`
  margin: 1rem;
  margin-left: 2rem;
`

const Menu = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 60%;

  font-size: 16px;
`

const MenuList = styled.div`
  margin: 1rem;
`

const Log = styled.button`
  margin: 2rem;
  width: 6rem;
  height: 2rem;
  background-color: #E0EFEF;
  border: 1px solid #C7DFDF;
  border-radius: 8px;

  font-size: 16px;
`

export default Header;