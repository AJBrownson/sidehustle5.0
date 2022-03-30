import styled, {createGlobalStyle} from 'styled-components';



const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    font-family: 'Kumbh Sans', sans-serif;
}
`; 


export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1700px;
margin-right: auto;
margin-left: auto;
padding-right: 50px;
padding-left: 50px;

@media screen and (max-width: 768px) {
    // padding-right: 30px;
    // padding-left: 30px;
}
`;

export default GlobalStyle;