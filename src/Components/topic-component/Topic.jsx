import React ,{useState, useEffect}from 'react'

import { useSelector } from 'react-redux'

import {TopicContainer, TopicHeader, IconContainer, TopicTitle} from './topic_style.jsx'
import {SelfHelpIcon, MoneyIcon, PodcastIcon} from '../bar-component/sidebar_style.jsx'

const Topic = ({children, title, borderbottom, classname}) => {


    return (
        <TopicContainer className={classname} flexdirection='column' borderbottom={borderbottom}>
            <TopicHeader>
                <TopicTitle to={title.toLowerCase()}>{title}</TopicTitle>
                 <IconContainer> 
                    {
                        title === 'SelfHelp' ? <SelfHelpIcon /> :
                            title === 'Business' ? <MoneyIcon /> : <PodcastIcon/>
                    } 
                </IconContainer> 
            </TopicHeader>
            <TopicContainer margin="130px" >
                {children}
            </TopicContainer>
        </TopicContainer>
    )
}

export default Topic
