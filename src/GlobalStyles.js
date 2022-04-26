import styled, {createGlobalStyle} from 'styled-components';



const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
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
@media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}
`;


export const HomeContainer = styled.div`
z-index: 1;
width: 100%;
margin: auto;
padding: 5% 10% 0 5%;
@media screen and (max-width: 991px) {
    padding: 0 5% 0 5%;
}
`;



export const FContainer = styled.div`
width: 100%;
max-width: 1700px;
margin: 0 auto 0 auto;
padding: 0 50px 0 50px;
@media screen and (max-width: 991px) {
   display: flex;
   flex-direction: column;
}
`;


export default GlobalStyle;