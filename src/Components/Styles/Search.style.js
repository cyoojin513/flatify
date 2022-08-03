import styled from "styled-components";

const SearchHeader = styled.div`
    height: 120px;
    padding-top: 10px;

    h2 {
        color: white;
    }
    
    div.holder {
        position: relative
    }

    div.holder svg {
        z-index: 100;
        width: 28px;
        transform: translate(10px, 7px);
        height: auto;
        position: absolute;
    }
`

export default SearchHeader