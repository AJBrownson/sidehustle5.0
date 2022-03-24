import React from 'react'
import Close from '../../Assets/images/icon-close.svg'
import Prev  from '../../Assets/images/icon-previous.svg'
import Next from '../../Assets/images/icon-next.svg'
import { OverlayDismiss, OverlayBiggerImage } from './Modal.elements'



function Modal ({clicked, setClicked, handleRotationRight, handleRotationLeft}) {
    const handleClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
          setClicked(null);
        }
      };
  
    return (
    <>
        <OverlayDismiss onClick={handleClick}>
            <OverlayBiggerImage>
            <img src={clicked} alt='bigger pics' />
            </OverlayBiggerImage>
            <span className='dismiss'>
                <img src={Close} alt='close icon' />
            </span>
            <div onClick={handleRotationLeft} className="overlay-arrows_left">
                <div>
                    <img src={Prev} alt='previous button' />
                </div>
            </div>
        </OverlayDismiss>
        <div onClick={handleRotationRight} className="overlay-arrows_right">
            <div>
                <img src={Next} alt='next button' />
            </div>
        </div>
    </>
  );
}

export default Modal