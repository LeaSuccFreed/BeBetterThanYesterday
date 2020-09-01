import React from 'react'
import { useSelector } from 'react-redux'

import Topic from '../topic-component/Topic.jsx'
import {ViewTypeTopicContainer} from './view-type-topic_style.jsx'
import {SelfHelpIcon, MoneyIcon, PodcastIcon} from '../bar-component/sidebar_style.jsx'


const ViewTypeTopic = () => {
    const {data, loading, error} = useSelector(state => state.fetchBooksAndPodcast)
    console.log(data)
    
        return (
            <ViewTypeTopicContainer>
                {
                    data ? 
                        data.map(({topic, id}) => {
                            return(
                                <Topic key={id} classname={topic} title={topic} borderbottom={ (topic === 'SelfHelp') || (topic === 'Business') ? `2px solid #f5f0f0` : "0"}>
                                    {
                                        topic === 'SelfHelp' ? (<SelfHelpIcon />) : topic === 'Business' ? (<MoneyIcon />) : (<PodcastIcon />)
                                    }
                                </Topic>
                            )
                        }) : (<h1>Error</h1>)

                }
            </ViewTypeTopicContainer>
        )

}

export default ViewTypeTopic
