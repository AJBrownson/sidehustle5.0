import styled from 'styled-components'


export const MainContainer = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`


export const PicturesContainer = styled.div`
display: flex;
margin-top: 5%;
width: 50%;
height: 50%;

& > img {
    width: 100%;
    border-radius: 15px;
    height: 20%;
}
`

export const InfoContainer = styled.div`
display: flex
`

export const ThumbNails = styled.div`
display: flex;
flex-direction: row;
`

export const Thumbs = styled.div`
display: flex;
flex-direction: row;
justify-content: 35%;
margin-inline-start: 10%;
cursor: pointer;

& > img {
    margin-top: 5%;
    width: 20%;
    height: 5%;
    border-radius: 10px;
}

& > img:hover {
    opacity: 0.5;
}

@media screen and (max-width: 768px) {
    display: none;
}
`

export const CompanyName = styled.div`
text-transform: uppercase;
color: hsl(26, 100%, 50%);
margin-top: 5%;
font-size: smaller;
`

export const ProductInfo = styled.div`
font-size: 15px;
`

export const ProductPriceBig = styled.div`
font-size: 25px;
font-weight: 900;
`