import React from 'react'
import styled from 'styled-components'


const Contact = () => {
  return (
    <ContactWrapper>
      <ContactInfo>
        <p>BrokerNetwork Project</p>
        <p>This project hits an API and saves it in store and passes between pages</p>
      </ContactInfo>
    </ContactWrapper>
  )
}

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  margin-top: 14rem;
  margin-bottom: 26.5rem;

  animation: fadeIn ease 4s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 480px) {
    margin-top: 5rem;
  }
`


const ContactInfo = styled.div`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }
`


export default Contact
