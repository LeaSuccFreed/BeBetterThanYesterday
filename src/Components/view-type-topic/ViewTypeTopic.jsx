import React from 'react'
import { useSelector } from 'react-redux'

import Topic from '../topic-component/Topic.jsx'
import BookCardComponent from '../book-card_component/BookCardComponent.jsx'
import {ViewTypeTopicContainer} from './view-type-topic_style.jsx'
import {SelfHelpIcon, MoneyIcon, PodcastIcon} from '../bar-component/sidebar_style.jsx'


const ViewTypeTopic = () => {
    const {data, loading, error} = useSelector(state => state.fetchBooksAndPodcast);
    console.log(data)

        return (
            <ViewTypeTopicContainer>
                
                <Topic title="SelfHelp" borderbottom="2px solid #f5f0f0">
                     {/* <SelfHelpIcon/> */}
                     {
                        data &&  data.books.map(book => {
                                if(book.topic === 'SelfHelp'){
                                    return <BookCardComponent key={book.id} width='130px' height='150px' title={book.Title} imgurl={book.imgUrl}></BookCardComponent>
                                }
                            })
                     }
                </Topic>
            
                <Topic title="Business" borderbottom="2px solid  #f5f0f0">
                     {/* <MoneyIcon/> */}
                    {
                        data && data.books.map(book => {
                            if(book.topic === 'Business'){
                                return <BookCardComponent key={book.id} width='130px' height='150px' title={book.Title} imgurl={book.imgUrl}></BookCardComponent>
                            }
                        })
                    }

                </Topic>
                        
                <Topic title="Podcast" borderbottom="0">
                     {/* <PodcastIcon/>  */}
                     {
                     data && data.podcasts.map(podcast => {
                        return <BookCardComponent key={podcast.id} width='200px' height='100px' title={podcast.Title} imgurl={podcast.imgUrl}></BookCardComponent>
                     })
                     }
                </Topic>
                
            </ViewTypeTopicContainer>
        )

}

export default ViewTypeTopic
