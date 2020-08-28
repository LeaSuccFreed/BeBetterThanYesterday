import React, {useEffect} from 'react'

import BarComponent from '../../Components/bar-component/BarComponent.jsx'
import ViewTypeTopic from '../../Components/view-type-topic/ViewTypeTopic.jsx'
import {HomePageContainer} from './home-page_style.jsx'
import { useSelector, useDispatch } from 'react-redux'

import {fetchStart} from '../../redux/features/fetchBooksAndPodcast/fetchBooksAndPodcastSlice.js'

const HomePage = () => {
    const booksAndPocasts = useSelector(state => state.fetchBooksAndPodcastReducer.data)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchStart);
        console.log(booksAndPocasts)
    }, [])

    return (
        <HomePageContainer>
            <BarComponent width="65px" flexDirection="column"/>
            <ViewTypeTopic />
        </HomePageContainer>
    )
}

export default HomePage
