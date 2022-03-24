import styled from 'styled-components'

export const Image = styled.div`
width: 40%;
border-radius: 5px;
height: 50%;
margin-bottom: 1px;

& > img {
    height: 40px;
    width: 40px;
    border: 2px solid transparent;
}

& > img:hover {
    border: 2px solid hsl(26, 100%, 55%);
    border-radius: 50%;
    cursor: pointer;
}
`;