import {TopicContainer, TopicHeader, IconContainer, TopicTitle} from './topic_style.jsx'
import BookCardComponent from '../book-card_component/BookCardComponent.jsx'

const Topic = ({children, title, borderbottom, classname}) => {
    const {data, loading, error} = useSelector(state => state.fetchBooksAndPodcast);
    
    const cardComponent = (book) => (<BookCardComponent title={book.Title} imgurl={book.imgUrl} ></BookCardComponent>)
    const books = data && data.map(dt => {
        if(dt.books){
            return dt.books.map(book =>{ 
              if(title === book.topic && book.topic === title ){
                 return cardComponent(book)
              } 
                })
        }
    })

    return (
        <TopicContainer className={classname} flexdirection='column' borderbottom={borderbottom}>
            <TopicHeader>
                <TopicTitle to={title.toLowerCase()}>{title}</TopicTitle>
                <IconContainer> {children} </IconContainer>
            </TopicHeader>
            <TopicContainer margin="130px" >
                {
                    books
                }    
            </TopicContainer>
        </TopicContainer>
    )
}

export default Topic