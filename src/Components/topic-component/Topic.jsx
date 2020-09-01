import React from 'react'

import {TopicContainer, TopicHeader, IconContainer, TopicTitle} from './topic_style.jsx'

const Topic = ({children, title, borderbottom, classname}) => {
    return (
        <TopicContainer className={classname} flexdirection='column' borderbottom={borderbottom}>
            <TopicHeader>
                <TopicTitle to={title.toLowerCase()}>{title}</TopicTitle>
                <IconContainer> {children} </IconContainer>
            </TopicHeader>
            <TopicContainer></TopicContainer>
        </TopicContainer>
    )
}

export default Topic
