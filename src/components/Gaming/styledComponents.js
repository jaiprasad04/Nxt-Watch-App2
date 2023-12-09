import styled from 'styled-components'

export const MainBody = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
  }
`

export const SidebarContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 20%;
  }
`

export const GamingMainContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`

export const GamingContainer = styled.div`
  height: 90vh;
  overflow-x: auto;
  width: 100%;
  flex-grow: 1;
  @media screen and (max-width: 768px) {
    min-height: 90vh;
  }
`

export const GamingMenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#ebebeb'};
`

export const IconContainer = styled.div`
  padding: 14px;
  border-radius: 40px;
  margin-right: 10px;
  margin-left: 10px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#e2e8f0'};
`

export const MenuHeading = styled.h1`
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
  font-size: 20px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const LoaderContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  margin: 10px;
`

export const FailureImg = styled.img`
  width: 250px;
  padding-top: 15px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`

export const FailureText = styled.h1`
  margin: 0px;
  padding: 5px;
  padding: 5px;
  font-size: 24px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 30px;
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

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  padding: 12px 32px;
  margin-top: 10px;
  border-radius: 5px;
`

export const GamesList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    padding: 24px 48px;
  }
`
