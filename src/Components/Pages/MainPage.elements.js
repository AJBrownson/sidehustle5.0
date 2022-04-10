import styled from 'styled-components'



export const Main = styled.div`
padding-inline-start: 5%;
padding-inline-end: 5%;
top: 0;
left: 0;
align-items: center;
justify-content: center;

@media screen and (max-width: 768px) {
    padding: 0;
    margin: 0 auto;
    width: 100%;
}
`;



export const Products = styled.div`
display: grid;
grid-template-columns: 6fr 6fr;
margin-top: 2%;

@media screen and (max-width: 768px) {
    display: block;
}
`;


export const PicturesCard = styled.div`
display: flex;
margin-top: 5%;
margin-left: 20%;
width: 70%;

img {
    width: 100%;
    border-radius: 10px;
}

@media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
    position: relative;
    top: 0;
    left: 0;

    img {
        width: 100%;
        position: relative;
        border-radius: 0;
    }
}
`;


export const RotationKeys = styled.div`
display: none;

@media screen and (max-width: 768px) {
    display: flex;
    position: absolute;
    top: 45%;
    left: 45%;
}
`;


export const InfoCard = styled.div`
// flex-direction: column;
// width: 100%;
// margin-top: 10%;
// margin-left: 5%;

width: 60%;
margin-top: 10%;
margin-left: 20%;

@media screen and (max-width: 768px) {
    width: 90%;
    margin-inline: 5%;
}
`;


export const CompanyName = styled.h1`
text-transform: uppercase;
color: hsl(26, 100%, 50%);
margin-top: 5%;
font-size: smaller;

@media screen and (max-width: 768px) {
    font-size: 90%;
}
`;



export const ProductTitle = styled.h1`
font-weight: 700;
`;



export const ProductInfo = styled.p`
font-size: 15px;
`;


export const PriceDiscount = styled.div`

@media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
}
`;


export const Big = styled.span`
font-size: 25px;
font-weight: 900;

@media screen and (max-width: 768px) {
    font-size: 30px;
    font-weight: 700;
}
`;


export const Small = styled.span`
margin-left: 2%;
font-size: 15px;
font-weight: 900;
color: hsl(26, 100%, 50%);
background-color: hsl(25, 100%, 94%);
padding: 5px 3px;
border-radius: 5px;

@media screen and (max-width: 768px) {
    padding-left: 15px;
}
`;



export const ProductPrice = styled.p`
`;



export const Discount = styled.p`
font-size: 15px;
color: hsl(219, 9%, 45%);
text-decoration: line-through;

@media screen and (max-width: 768px) {
    padding-top: 3%;
}
`;


export const Btns = styled.div`
display: flex;
justify-content: space-between;

@media screen and (max-width: 768px) {
    display: block;
}
`;



export const CounterButton = styled.button`
color: hsl(219, 9%, 45%);
width: 35%;
display: flex;
padding: 20px;
justify-content: space-between;
border: hidden;
border-radius: 10px;

& > span {
    font-size: larger;
    font-weight: 700;
}

@media screen and (max-width: 768px) {
    width: 100%;
    margin-bottom: 5%;
}
`;


export const MinusCounter = styled.span`

& > img {
    padding-bottom: 3px;
}

img:hover {
    cursor: pointer;
    opacity: 0.5;
}
`;


export const PlusCounter = styled.span`

& > img {
    padding-top: 2px;
}

img:hover {
    cursor: pointer;
    opacity: 0.5;
}
`;



export const ActionButton = styled.button`
background-color: hsl(26, 100%, 55%);
display: flex;
width: 60%;
justify-content: center;
padding: 10px 20px;
border: hidden;
border-radius: 10px;
cursor: pointer;

:hover {
    opacity: 0.5;
}

& > img {
    padding-top: 9px;
    padding-right: 10px;
}

& > p {
    color: hsl(0, 0%, 100%);
    font-weight: 700;
}

@media screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
    margin-bottom: 5%;
    justify-content: center;

    & > p {
        padding-right: 10px;
    }
}
`;


export const ThumbNails = styled.div`
display: flex;
flex-direction: row;
width: 70%;
justify-content: space-between;
margin-left: 20%;
`;


export const Thumbs = styled.div`
& > img {
    cursor: pointer;
    margin-top: 15%;
    width: 100%;
    height: 65%;
    border-radius: 10px;
}

& > img:hover {
    opacity: 0.5;
}

@media screen and (max-width: 768px) {
    display: none;
}
`;

// & > img {
//     margin-top: 10%;
//     width: 100%;
//     height: 100%;
//     border-radius: 10px;
// }


// main container
// display: grid;
// grid-template-columns: 2fr 2fr;
// margin-top: 2%;
// padding-inline-start: 10%;
// padding-inline-end: 10%;

// ThumbNails

// display: flex;
// width: 90%;
// justify-content: space-between;
// margin-left: 20%;