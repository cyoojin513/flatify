import styled from "styled-components";

const SearchInput = styled.input`
    height: 40px;
    width: 300px;
    border-radius: 40px;
    border: 0px;
    padding: 2px 50px;

    
    
    
`

const FormInput = styled.input`
    height: 35px;
    width: 300px;
    border-radius: 40px;
    border: 0px;
    padding: 2px 25px;
    
`

const FormSubmit = styled.input`
    background: #1dd761;
    height: 55px;
    width: 55px;
    border-radius: 28px;
    border: 0px;
    padding: 2px 10px;
    font-size: 150%;
    text-align: center;
    font-weight: bold;
    color: black;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 345px;
    transition: 0.3s;

    &:hover {
        transform: scale(1.05);
    }

    
`
export {FormInput, FormSubmit}
export default SearchInput