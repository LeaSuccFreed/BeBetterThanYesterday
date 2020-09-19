import React from 'react'

import IconContainer from '../icon_container/IconContainer.jsx'

import {BarContainer, SelfHelpIcon, MoneyIcon, PodcastIcon} from './sidebar_style.jsx'

const BarComponent = (props) => {


    return (
        <BarContainer {...props}>
            <IconContainer to='/selfhelp' width="65px" height="50px">
                <SelfHelpIcon />
            </IconContainer> 

            <IconContainer to='/businness' width="65px" height="50px">
                <MoneyIcon />
            </IconContainer> 

            <IconContainer to='/podcast' width="65px" height="50px">
                <PodcastIcon />
            </IconContainer> 
         </BarContainer>
    )
}

export default BarComponent
