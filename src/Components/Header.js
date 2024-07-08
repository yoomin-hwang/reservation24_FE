import styled from 'styled-components';

function Header () {
  return (
    <HeaderWrapper>
      <Logo>
        <img src="./" alt="csee logo" />
      </Logo>
      <Menu>HOME</Menu>
      <Menu>조회 및 예약하기</Menu>
      <Log>LOGOUT</Log>
    </HeaderWrapper>
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
`

const Menu = styled.div``

const Log = styled.button``

export default Header;