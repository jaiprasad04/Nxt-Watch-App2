import styled from 'styled-components'

export const VideoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 576px) {
    padding: 5px;
    flex-direction: row;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;

  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 250px;
  }
  @media screen and (min-width: 768px) {
    width: 350px;
  }
`

export const ThumbnailText = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px;
  width: 100%;
`

export const ChannelLogo = styled.img`
  width: 40px;
  @media screen and (min-width: 576px) {
    display: none;
  }
`

export const VideoTitle = styled.p`
  margin: 0px;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
export const VideoTextContainer = styled.div`
  margin-left: 12px;
`
export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 567px) {
    flex-direction: column;
  }
`
export const VideoDetailsContainer2 = styled.div`
  display: flex;
  flex-direction: row;
`
export const VideoDetailsText = styled.p`
  color: #475569;
  margin-right: 8px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: 'Roboto';
  @media screen and (min-width: 567px) {
    margin-top: 8px;
  }
`
