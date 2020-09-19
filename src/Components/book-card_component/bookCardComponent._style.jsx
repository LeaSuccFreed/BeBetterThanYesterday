import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const BooksCardContainer = styled(Link)`
    width: ${props => props.width}/*130px*/;
    height:${props => props.height}/*150px*/;
    /* border: 2px solid #f5f0f0; */
    align-self: center;
`

export const ImgContainer = styled.img`
    width: ${props => props.width}/*130px*/;
    height:${props => props.height}/*150px*/;
`