import React from 'react'

import {TopicContainer, IconContainer, TopicTitle} from './topic_style.jsx'

const Topic = ({children, title, borderbottom}) => {
    return (
        <TopicContainer borderbottom={borderbottom}>
            <TopicTitle to={title.toLowerCase()}>{title}</TopicTitle>
            <IconContainer>
                {children}
            </IconContainer>
        </TopicContainer>
    )
}

export default Topic
