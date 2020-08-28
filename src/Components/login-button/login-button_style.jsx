import styled from 'styled-components';
import {Link} from 'react-router-dom';
import LoginIconComponent from '../../assets/login.svg'

export const LoginContainer = styled(Link)`
    width: 50px;
    height: 60px;
    display: flex;
    flex-direction: column;
     justify-content: flex-end; 
     align-items: flex-end;
     flex-grow: 1; 
    cursor: pointer;
`

export const LoginIcon = styled(LoginIconComponent)`
    width: 48px;
    height: 48px;
    padding-right: 5%;
`

export const LoginTxT = styled.p`
    font-style: 12px;
    padding-right: 5%;
`