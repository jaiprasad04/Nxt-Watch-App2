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
  font-size: 20px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 32px;
  }
`

export const FailureDescription = styled.p`
  margin: 0px;
  padding: 5px;
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#181818')};
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const RetryButton = styled.button`
  background-color: #4f46e5;
  color: white;
  border: none;
  font-size: 14px;
  padding: 12px 32px;
  margin-top: 10px;
  border-radius: 4px;
`
export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`

export const VideoItemDetailsContainer = styled.div`
  height: 90vh;
  width: 100%;
  overflow-x: auto;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  flex-grow: 1;
  padding-bottom: 30px;
  @media screen and (max-width: 768px) {
    min-height: 90vh;
  }
`

export const VideoDetailContainer = styled.div`
  height: 100%;
`

export const PlayerContainer = styled.div`
  height: 240px;
  @media screen and (min-width: 768px) {
    height: 540px;
    padding: 20px 20px 0px 20px;
  }
`

export const VideoTextContainer = styled.div`
  margin: 0px;
  padding: 16px;
  @media screen and (min-width: 768px) {
    padding-left: 20px;
  }
`

export const VideoTitle = styled.p`
  margin: 0px;
  margin-top: 8px;
  font-weight: 500;
  font-size: 18px;
  font-family: Roboto;
  color: ${props => (props.theme === 'dark' ? '#cccccc' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`

export const LikesAndViewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 10px;
  color: #475569;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
  }
`

export const ViewsAndPostedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ViewsText = styled.p`
  margin: 0px 10px 0px 0px;
  display: flex;
  align-items: center;
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Button = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  border: none;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 16px;
  cursor: pointer;
  padding-left: 6px;
  margin-right: 16px;
  margin-top: 10px;
  padding-bottom: 10px;
  color: ${props => (props.theme === 'active' ? '#2563eb' : '#64748b')};
`

export const ChannelLogo = styled.img`
  width: 50px;
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
`

export const ChannelDetailsText = styled.p`
  padding-left: 15px;
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#0f0f0f')};
`
export const ChannelDetailsText2 = styled(ChannelDetailsText)`
  font-size: 14px;
  font-family: 'Roboto';
  color: #64748b;
`
export const VideoDescriptionText = styled.p`
  color: ${props => (props.theme === 'dark' ? '#94a3b8' : '#64748b')};
  margin-bottom: 20px;
  font-size: 14px;
  font-family: 'Roboto';
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
