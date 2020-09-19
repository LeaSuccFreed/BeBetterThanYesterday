import React, {Fragment, useEffect} from 'react';
import{ useSelector, useDispatch } from 'react-redux';
import {fetchStart} from '../../redux/features/fetchBooksAndPodcast/fetchBooksAndPodcastSlice.js'

import BarComponent from '../../Components/bar-component/BarComponent.jsx';
import SearchBar from '../../Components/search-bar_component/SearchBar.jsx';
import BookCardComponent from '../../Components/book-card_component/BookCardComponent.jsx'
import {Container, SelfHelpContainer, ShHeader, SelfHelpIcon, ItemContainer, BooksPodcastContainer, Books, BooksTitle, BooksFooter ,ReadingIcons, CheckedIcons, LinkIcons} from './selfhelp_style.jsx'

const SelfHelp = () => {
    const {data, loading, error} = useSelector(state => state.fetchBooksAndPodcast )
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchStart())
    }, []);
    console.log(data)

    return (
        <Container>
            <BarComponent width="65px" flexDirection="column"/>
            <SelfHelpContainer>
                <SearchBar />
                <ShHeader>
                   <h1>SELF-HELP</h1> 
                   <SelfHelpIcon />
                </ShHeader>
                <ItemContainer>
                    {
                        data && data.books.map((books) => {
                            const { imgUrl, Title, id } = books;
                            const topic = books.topic.toLowerCase();
                            const url = window.location.href.split('').slice(22).join('');
                             if(topic === url){
                                 return (
                                     <BooksPodcastContainer>
                                        <BookCardComponent key={id} title={Title} imgurl={imgUrl} width='130px' height="150px" />
                                        <BooksFooter>
                                            <ReadingIcons />
                                            <CheckedIcons />
                                            <LinkIcons />
                                        </BooksFooter>
                                        <BooksTitle>{Title}</BooksTitle>
                                    </BooksPodcastContainer>
                                 )
                             }
                        })
                    }
                </ItemContainer>
            </SelfHelpContainer>
        </Container>
    )
}

export default SelfHelp
