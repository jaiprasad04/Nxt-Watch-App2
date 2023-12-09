import styled from 'styled-components'

export const MainBody = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    height: 90vh;
  }
`

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 20%;
  }
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 100%;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const NotFoundImage = styled.img`
  width: 250px;
  padding-top: 15px;
  @media screen and (min-width: 768px) {
    width: 400px;
  }
`
export const NotFoundText = styled.h1`
  margin: 0px;
  padding: 5px;
  font-size: 24px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const FailureDescription = styled.p`
  margin: 0px;
  padding: 5px;
  font-size: 12px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
