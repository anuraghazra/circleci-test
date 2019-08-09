import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: fixed;
  height: 50px;
  width: 100%;
  padding: 0px 0;
  background-color: #f8f8f8;
  box-shadow: 0 10px 100px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  top: 0;
  
  .nav__content {
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
  }

  .logo {
    max-width: 35px;
    flex-basis: 100px;
  }

  ul {
    list-style: none;
  }

  li {
    margin-right: 30px;
    display: inline-block;
  }
  li:hover {
    cursor: pointer;
    color: #6D83F2
  }


`

export default NavWrapper;