import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const TopicContainer = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: ${props => props.flexdirection};
    border-bottom: ${props => props.borderbottom};
    justify-content: ${props => props.justifycontent};
    margin-left: ${props => props.margin}
`
export const TopicHeader = styled.div`
    display: flex;
`

export const TopicTitle = styled(Link)`
    margin: 0;
    padding: 10px 0 0 10px;
    font-size: 1.17em;
    font-weight: bold;
`

export const IconContainer = styled.div`
    width: 36px;
    height: 36px;
    padding: 10px 0 0 10px;
`