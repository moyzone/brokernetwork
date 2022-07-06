import React,{ useEffect } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import homepageImage from '../assets/images/redux-logo.png'
import Button from '../components/elements/Button'
import routes from '../constants/routes.json'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../state/actions/products'



const Home = () => {
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    loadProducts()
    
  }, [])


  const loadProducts = async () => {
    dispatch(setProducts(await fetchProducts()))
    console.log(products)
  }

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json()
    return data
  }


  return (
    <HomeWrapper>
      <Message>
        <SmallMessage>Hey we have loaded the data</SmallMessage>
        <BigMessage>Will show it on the next page</BigMessage>
        <br/>
        <Link to={routes.PRODUCTS}>
          <Button
            content="View data"
            size="big"
            shape="round"
            color="dark"
            animation="scale"
          ></Button>
        </Link>
      </Message>
      <Image src={homepageImage} alt="people"></Image>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 6rem;
  margin-bottom: 20rem;

  @media (max-width: 1024px) {
    justify-content: center;
  }

  @media (max-width: 768px) {
    margin-top: 1rem;
  }
`

const Message = styled.div`
  display: flex;
  flex-direction: column;
  width: 50rem;



  @media (max-width: 1024px) {
    align-items: center;
  }
`

const SmallMessage = styled.div`
  color: ${({ theme }) => theme.colors.grey.dark};
  font-size: 1.9rem;
  font-weight: bold;
  letter-spacing: 0.5rem;
  text-transform: uppercase;

  @media (max-width: 450px) {
    font-size: 1.4rem;
  }
`

const BigMessage = styled.div`
  font-size: 6.4rem;
  font-weight: bold;

  @media (max-width: 1024px) {
    text-align: center;
    margin-bottom: 3rem;
  }

  @media (max-width: 450px) {
    font-size: 5rem;
  }
`

const Underline = styled.img`
  width: 25rem;
  margin-top: -1rem;
  margin-bottom: 3rem;

  @media (max-width: 1024px) {
    display: none;
  }
`

const Image = styled.img`
  width: 75rem;


  @media (max-width: 1024px) {
    position: absolute;
    z-index: -1;
    width: 100%;
    opacity: 0.4;
    animation: none;
  }

  @media (max-width: 600px) {
    top: 25rem;
  }
`

export default Home
