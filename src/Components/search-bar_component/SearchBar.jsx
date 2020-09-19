import React from 'react'

import {SearchBarContainer, SearchTextElement, SubmitButton, SearchIcon} from './search-bar_style.jsx'

const SearchBar = ({handleChange}) => {
    return (
        <SearchBarContainer>
            <SearchTextElement type="text" placeholder="Search" onChange={handleChange}/>
            <SubmitButton type="submit">
                <SearchIcon />
            </SubmitButton>
        </SearchBarContainer>
    )
}

export default SearchBar
