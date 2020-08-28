import React from 'react'

import Topic from '../topic-component/Topic.jsx'
import {ViewTypeTopicContainer} from './view-type-topic_style.jsx'
import {SelfHelpIcon, MoneyIcon, PodcastIcon} from '../bar-component/sidebar_style.jsx'

const ViewTypeTopic = () => {
    return (
        <ViewTypeTopicContainer>
            <Topic title="SelfHelp" borderbottom="2px solid #f5f0f0" >
                <SelfHelpIcon/>
            </Topic>
            <Topic title="Business" borderbottom="2px solid  #f5f0f0" >
                <MoneyIcon/>
            </Topic>
            <Topic title="Podcast" borderbottom="0">
                <PodcastIcon/>
            </Topic>
        </ViewTypeTopicContainer>
    )
}

export default ViewTypeTopic
