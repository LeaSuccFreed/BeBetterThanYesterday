import React, {useEffect} from 'react'

import BarComponent from '../../Components/bar-component/BarComponent.jsx'
import ViewTypeTopic from '../../Components/view-type-topic/ViewTypeTopic.jsx'
import {HomePageContainer} from './home-page_style.jsx'
import { useSelector, useDispatch } from 'react-redux'

import {firestore, convertSnapshotToObj, addBooksAndPodcast} from '../../Firebase/firebase_utils.js'

import {fetchStart} from '../../redux/features/fetchBooksAndPodcast/fetchBooksAndPodcastSlice.js'

const HomePage = () => {
    const {data, loading, error} = useSelector(state => state.fetchBooksAndPodcast)
    const dispatch = useDispatch();
    useEffect(() => {
        //  addBooksAndPodcast()
         dispatch(fetchStart());
    }, [])

    // console.log(`BooksAndPodcast`, data)
    

    return (
        <HomePageContainer>
            <BarComponent width="65px" flexDirection="column"/>
            <ViewTypeTopic />
        </HomePageContainer>
    )
}

export default HomePage
