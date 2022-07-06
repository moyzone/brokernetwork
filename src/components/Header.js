import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import routes from '../constants/routes.json'

const Header = () => {


  return (
    <HeaderWrapper>
      <Container>
        <Link to={routes.HOME}>
          <Logo>Broker Network</Logo>
        </Link>
        <Navbar>
          <NavbarLink to={routes.HOME}>Home</NavbarLink>
          <NavbarLink to={routes.PRODUCTS}>Products</NavbarLink>
          <NavbarLink to={routes.CONTACT}>Contact</NavbarLink>
        </Navbar>
      </Container>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.dark};
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.widths.content};
  margin: 0 auto;
  padding: 4rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
  }
`

const Logo = styled.h1`
  color: white};
  font-size: 6rem;
`

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7rem;
  font-size: 2.4rem;

  @media (max-width: 480px) {
    gap: 0;
    width: 100%;
  }
`

const NavbarLink = styled(Link)`
  padding: 1rem;
  color: ${({ theme }) => theme.colors.light};
  transition: transform 0.15s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`


export default Header
