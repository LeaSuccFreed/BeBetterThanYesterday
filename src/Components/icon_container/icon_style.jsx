import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const ContainerIcon = styled(Link)`
    width: ${props => props.width};
    height: ${props => props.height};
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffff;
    border-bottom: 2px solid #f5f0f0;
    `