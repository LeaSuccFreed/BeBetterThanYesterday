import styled from 'styled-components';
import SelfHelpSVG from '../../assets/self-help.svg'
import LinkSvg from '../../assets/link.svg';
import CheckedSvg from '../../assets/checked.svg';
import ReadingSvg from '../../assets/book.svg'

const svgXY = {
    width: '20px',
    height: '20px',
    margin: '5px'
}

export const Container = styled.div`
    display: flex;
`

export const SelfHelpContainer = styled.div`
    display: flex;
    flex-direction: column; 
    width: 96%;
    justify-content: center;
    border-left: 2px solid #f5f0f0;
`

export const ShHeader = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 5%;
    margin-top: 4vh;
    
`

export const SelfHelpIcon = styled(SelfHelpSVG)`
    width: 60px;
    height: 60px;
`


export const ItemContainer = styled.div`
    display: flex;
    flex-grow: 1;
    min-height: 44vh;
    flex-wrap: wrap;
    justify-content: space-evenly;
    /* border: 1px solid black; */
    margin-top: 3vh;
`
export const BooksPodcastContainer = styled.div`
    display: flex;
    width: 200px;
    height: 230px;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* border: 1px solid black; */
`
export const BooksTitle = styled.p``

export const BooksFooter = styled.div`
    display: flex;
    width: 100%;
    justify-content: left;
    align-content: center;
    margin-left: 26px;
`
export const ReadingIcons = styled(ReadingSvg)`
    width: ${svgXY.width};
    height: ${svgXY.height};
    margin-right: ${svgXY.margin}
`

export const CheckedIcons = styled(CheckedSvg)`
    width: ${svgXY.width};
    height: ${svgXY.height};
    margin-right: ${svgXY.margin};
`

export const LinkIcons = styled(LinkSvg)`
    width: ${svgXY.width};
    height: ${svgXY.height};
    margin-right: ${svgXY.margin};
`


