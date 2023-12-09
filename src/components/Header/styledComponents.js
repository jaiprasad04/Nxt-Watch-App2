import styled from 'styled-components'

export const NavMobileContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#ffffff'};
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const NavLargeContainer = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    background-color: ${props =>
      props.theme === 'dark' ? '#212121' : '#ffffff'};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`

export const ResponsiveContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 16px;
  width: 90%;
`

export const HeaderLogoImg = styled.img`
  width: 120px;
  @media screen and (min-width: 768px) {
    width: 140px;
  }
`
export const NavMobileIcons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

export const IconButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
  margin-left: 5px;
  margin-right: 5px;
`

export const LogoutPopupContent = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#1e293b' : '#f9f9f9'};
  border-radius: 8px;
  padding: 24px;
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#1e293b')};
  @media screen and (max-width: 576px) {
    padding: 12px;
  }
`

export const Button = styled.button`
  background-color: ${props => (props.outline ? 'transparent' : '#3b82f6')};
  padding: 8px 16px;
  font-size: 14px;
  font-family: 'Roboto';
  margin: 5px;
  color: ${props => (props.outline ? '#3b82f6' : 'white')};
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  border: 1px solid #3b82f6;
`
export const ProfileIcon = styled.img`
  width: 25px;
  cursor: pointer;
  margin-left: 15px;
  margin-right: 15px;
`
export const NavLargeIcons = styled.div`
  display: flex;
  align-items: center;
`
export const LargeLogoutButton = styled(Button)`
  margin: 0px;
  margin-left: 15px;
  margin-right: 15px;
  padding: 8px 16px;
  font-weight: bold;
  font-size: 14px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#3b82f6')};
  border-color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#3b82f6')};
`

export const MenuPopupMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 20px;
  margin: 0;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`
export const MenuListMobile = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
