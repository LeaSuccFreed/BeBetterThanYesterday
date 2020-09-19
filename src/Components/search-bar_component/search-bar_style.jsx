import styled from 'styled-components';
import SearchSVG from '../../assets/searchX.svg';

export const SearchBarContainer = styled.div`
    width: 250px;
    height: 50px;
    display: flex;
    align-self: center;
    /* border: 1px solid black; */
    box-shadow:
  0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12)
;
    border-radius: 50px;
    margin-top: 1vh;
    margin-right: 6%;
`

export const SearchTextElement = styled.input`
    flex-grow: 3;
    border: none;
    background: none;
    outline: none;
    padding-left: 16px
`

export const SubmitButton = styled.button.attrs(props => ({
    className: props.className,
})) `
    width: 50px;
    height: 50px;
    display: flex;
    border-radius: 50%;
    /* background: rgba(0, 0, 0); */
    border: none;
    outline: none;
    left: 35px;
    align-items: center;
    justify-content: center;
    
`

export const SearchIcon = styled(SearchSVG)`
    overflow: visible;
    width: 55px;
    height: 55px;
    cursor: pointer
`