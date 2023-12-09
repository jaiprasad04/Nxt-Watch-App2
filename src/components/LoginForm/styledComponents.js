import styled from 'styled-components'

export const LoginContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#1e293b' : '#f9f9f9'};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginCardContainer = styled.div`
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#ffffff'};
  box-shadow: 0px 0px 5px #00000050;
  border-radius: 8px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;
  width: 100%;
  max-width: 360px;
`

export const WebsiteLogo = styled.img`
  width: 100px;
  margin-bottom: 18px;
  margin-top: 12px;
  @media screen and (min-width: 768px) {
    width: 180px;
    margin-bottom: 32px;
    margin-top: 24px;
  }
`

export const Label = styled.label`
  text-align: left;
  align-self: flex-start;
  font-size: 12px;
  padding: 0px 20px 15px 0px;
  font-family: 'Roboto';
  color: ${props => (props.theme === 'dark' ? 'white' : '#475569')};
  font-weight: 600;
`

export const LoginInput = styled.input`
  width: 100%;
  height: 35px;
  padding-left: 10px;
  background-color: ${props => (props.theme === 'dark' ? 'black' : 'white')};
  border: 1px solid;
  border-color: #94a3b8;
  border-radius: 4px;
  margin-top: 5px;
  color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
  margin-bottom: 10px;
  outline: none;
`
export const Form = styled.form`
  padding-top: 20px;
`
export const ShowPasswordLabel = styled.label`
  color: ${props => (props.theme === 'dark' ? 'white' : 'black')};
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
`

export const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  margin-top: 24px;
  margin-bottom: 2px;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #3b82f6;
  color: #ffffff;
  font-weight: 500;
  font-family: Roboto;
  font-size: 14px;
`
export const ErrorMsg = styled.p`
  align-self: flex-start;
  color: #ff0b37;
  font-size: 14px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-top: 3px;
  margin-bottom: 0;
  line-height: 1.2;
`
