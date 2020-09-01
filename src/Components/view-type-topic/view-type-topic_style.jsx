import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ViewTypeTopicContainer = styled.div.attrs(props => ({
    className: props.className,
}))`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    margin: 2px 0 0 2px;
    background: #ffff;

    & .SelfHelp{
        order: 1
    }

    & .Business{
        order: 2
    }

    & .Podcast{
        order: 3
    }


`
