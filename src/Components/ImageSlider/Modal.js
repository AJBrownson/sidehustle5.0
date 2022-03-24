import React from 'react'
import Close from '../../Assets/images/icon-close.svg'
import Prev  from '../../Assets/images/icon-previous.svg'
import Next from '../../Assets/images/icon-next.svg'


function Modal ({clicked, setClicked, handleRotationRight, handleRotationLeft}) {
    const handleClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
          setClicked(null);
        }
      };
  
    return (
    <>
        <div className='overlay-dismiss' onClick={handleClick}>
            <img src={clicked} alt='bigger pics' />
            <span className='dismiss'>
                <img src={Close} alt='close icon' />
            </span>
            <div onClick={handleRotationLeft} className="overlay-arrows_left">
                <div>
                    <img src={Prev} alt='previous button' />
                </div>
            </div>
        </div>
        <div onClick={handleRotationRight} className="overlay-arrows_right">
            <div>
                <img src={Next} alt='next button' />
            </div>
        </div>
    </>
  );
}

export default Modal