import styled from 'styled-components'

export const VideoCardContainer = styled.li`
  width: 100%;
  margin-bottom: 48px;
  @media screen and (min-width: 576px) and (max-width: 767px) {
    width: 50%;
    padding: 6px;
    height: 350px;
  }
  @media screen and (min-width: 768px) {
    width: 33%;
    padding: 6px;
    height: 100%;
    margin-right: 2px;
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
`

export const ChannelLogo = styled.img`
  width: 40px;
`

export const VideoTitle = styled.p`
  margin: 0px;
  color: ${props => (props.theme === 'dark' ? 'white' : '#0f0f0f')};
`
export const VideoTextContainer = styled.div`
  margin-left: 5px;
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
  margin: 0px;
  margin-top: 8px;
  margin-right: 8px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  color: #475569;
  @media screen and (min-width: 567px) {
    margin-bottom: 0px;
  }
`
