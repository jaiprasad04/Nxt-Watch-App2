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

export const HomeMainContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
`

export const Mainbar = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  width: 100%;
`

export const HomeContainer = styled.div`
  height: 100%;
  flex-grow: 1;
  @media screen and (min-width: 768px) {
    min-height: 90vh;
    padding: 24px;
  }
`

export const GetPremium = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  padding: 32px;
  display: flex;
  flex-direction: column;
`

export const BannerLogo = styled.img`
  width: 150px;
`

export const BannerText = styled.p`
  font-family: Roboto;
  font-size: 20px;
`

export const GetItButton = styled.button`
  color: black;
  border: 1px solid black;
  border-radius: 2px;
  background-color: transparent;
  padding: 8px 16px;
  align-self: flex-start;
  cursor: pointer;
  font-weight: 700;
  font-family: Roboto;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  align-self: flex-end;
`

export const SearchInput = styled.input`
  flex-grow: 1;
  border: ${props =>
    props.theme === 'dark' ? '1px solid #f9f9f9' : '1px solid #181818'};
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  padding: 6px 16px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  width: 450px;
  background-color: transparent;
  outline: none;
`
export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 24px;
  @media screen and (min-width: 768px) {
    width: 40%;
    margin: 6px;
    margin-bottom: 32px;
  }
`
export const SearchButton = styled.button`
  background-color: transparent;
  height: 30px;
  width: 70px;
  padding-top: 4px;
  border: ${props =>
    props.theme === 'dark' ? '1px solid #f9f9f9' : '1px solid #181818'};
`
export const VideosList = styled.ul`
  list-style: none;
  padding: 0px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
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

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  font-size: 14px;
  padding: 12px 32px;
  margin-top: 10px;
  border-radius: 5px;
`

export const NoVideosContainer = styled(FailureContainer)``

export const NoVideosImg = styled(FailureImg)``
