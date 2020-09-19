import styled from 'styled-components';
import {Link} from 'react-router-dom';
import LogoSvg from '../../assets/brain.svg'
import LoginButton from '../login-button/LoginButton.jsx'

export const HeaderContainer = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    background: #ffff;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #f5f0f0;
`

export const TitleContainer = styled.div`
    display: flex;
    flex-grow: 1
`
export const Title = styled.h1`
    font-size: 18px;
    padding-left: 5%;
`

export const LogoContainer = styled(Link)`
    display: flex;
    width: 50px;
    height: 50px;
    cursor: pointer;
    justify-content: center;
    flex-grow: 1;
    padding-right: 10%;
`

export const Logo = styled(LogoSvg)`
    width: 48px;
    height: 48px;
`

export const LoginBtnComponent = styled(LoginButton)`
    flex-grow: 1;
`