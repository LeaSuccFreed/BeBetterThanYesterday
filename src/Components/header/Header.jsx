import React from 'react'

import {HeaderContainer, TitleContainer, Title, LogoContainer, Logo, LoginBtnComponent} from './header_style.jsx'

const Header = () => {
    return (
            <HeaderContainer>
                <TitleContainer>
                    <Title> BeBetterThenYesterday </Title>
                </TitleContainer>
                
                <LogoContainer to="/">
                    <Logo />
                </LogoContainer>

                <LoginBtnComponent />
            </HeaderContainer>
    )
}

export default Header
