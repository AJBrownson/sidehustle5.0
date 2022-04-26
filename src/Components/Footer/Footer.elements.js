import styled from "styled-components";
import { Link } from 'react-router-dom';
import { FContainer } from '../../GlobalStyles';
import { FaPizzaSlice } from 'react-icons/fa';


export const Foooter = styled.footer`
background-color: #000016;
margin-top: 20%;
justify-content: space-between;
align-items: center;
position: sticky;
`;



export const FooterContainer = styled(FContainer)`
display: flex;
justify-content: space-between;
bottom: 0;
${FContainer}
`;


export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
text-decoration: none;
font-size: 2rem;
font-weight: 600;
display: flex;
align-items: center;
@media screen and (max-width: 991px) {
    font-size: 1rem;
    margin-top: 5%;
    display: flex;
    align-items: center;
    justify-content: center;
}
`;


export const NavIcon = styled( FaPizzaSlice )`
margin-right: 0.5rem;
`;


export const FooterMenu = styled.ul`
display: flex;
flex-direction: column;
margin-top: 15px;
align-items: center;
list-style-type: none;
color: #fff;
`;


export const FooterHeader = styled.div`
align-items: center;
font-size: 20px;
margin-top: 10px;
margin-bottom: 15px;
@media screen and (max-width: 991px) {
    font-size: 15px;
    margin-top: 5px;
    margin-bottom: 7px;
}
`;


export const FooterItem = styled.li`
font-size: 14px;
color: #fff;
@media screen and (max-width: 991px) {
    font-size: 10px;
}
`;


export const FooterLink = styled(Link)`
display: flex;
align-items: center;
text-decoration: none;
list-style: none;
color: white;
padding: 1rem;
@media screen and (max-width: 991px) {
    display: flex;
    flex-direction: column;
}
`;


export const FooterBottom = styled.div`
display: flex;
bottom: 0;
font-size: 12px;
align-items: center;
justify-content: center;
color: #fff;
`;