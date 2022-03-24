import styled from "styled-components";

export const OverlayDismiss = styled.div`
position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(27, 27, 27, 0.541);
  display: flex;
  align-items: center;

  & > span {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: #ffffff;
    z-index: 999;
    cursor: pointer;
  }
`;


export const OverlayBiggerImage = styled.div`

& > img {
    display: block;
    max-width: 60%;
    max-height: 80%;
    margin: 60px auto;
    box-shadow: 3px 5px 7px rgba(0, 0, 0, 0.5);
}
`