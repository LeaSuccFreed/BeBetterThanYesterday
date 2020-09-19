import React from 'react'

import {BooksCardContainer, ImgContainer} from './bookCardComponent._style.jsx'

const BookCardComponent = ({ title, imgurl, width, height}) => {
    return( 
        <BooksCardContainer to={`/${title}`} width={width} height={height} > <ImgContainer src={imgurl} width={width} height={height} /> </BooksCardContainer>
    )
}

export default BookCardComponent
