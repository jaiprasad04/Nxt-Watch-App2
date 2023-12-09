import styled from 'styled-components'

export const GameCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  margin: 8px;
  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
  @media screen and (min-width: 768px) {
    width: 260px;
    flex-direction: row;
    margin-right: 16px;
    margin-bottom: 24px;
  }
`

export const Thumbnail = styled.img`
  width: 100%;
`

export const ThumbnailText = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px;
  text-decoration: 'none';
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
  font-family: Roboto;
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
  @media screen and (min-width: 768px) {
    font-size: 18px;
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
  margin-right: 8px;
  font-size: 14px;
  color: #475569;
  font-family: 'Roboto';
  @media screen and (min-width: 567px) {
    margin-top: 8px;
  }
`
