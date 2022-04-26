import React from 'react';
import './About.css';
import img1 from '../Assets/img-1.jpg';
import img4 from '../Assets/img 3.jpg';
import avt from '../Assets/avater.jpg';
import avt1 from '../Assets/avater1.jpg';
import avt2 from '../Assets/avater2.jpg';



const About = () => {
  return (
    <div>
      <div className='clearFix'>
        <div className='row container'>
          <div className='note'>
            <h1>About Us </h1>
            <p>
              At Chops' Restaurant it is our duty to feed every customer with
              the best meal ever served.{' '}
              <strong>Your service is our concern</strong> with our wonderful
              recipe we hope to entice you with our taste.
            </p>
            <br />
            <p>
              We are a located at Radisson Beach deep in the heart of Venice in a
              popular place known as Beach of the north. Knowing how busy that
              area could be we were motivated to create a resturant, where you
              could come and cool of and regain your natural strength. that is
              why we choose this strategical site for the purpose of serving you
              properly.
            </p>
          </div>
          <h3>Our Recipe</h3>
          <div className='row container'>
            <div className='column card'>
              <img
                src={img1}
                alt=''
                style={{ width: '400px', height: '200px' }}
              />

              <p>Chef Special of the day</p>
            </div>
            <div className='column card'>
              <img
                src={img4}
                alt=''
                style={{ width: '400px', height: '200px' }}
              />

              <p>Hamburger and Fries</p>
            </div>
          </div>
        </div>
      </div>
      <div className='clearFix'>
        <div className='row container'>
          <div className='team'>
            <h3>Our Team</h3>
            <div className='column card'>
              <img
                src={avt}
                alt=''
                style={{ width: '300px', height: '300px' }}
              />
              <p>CEO</p>
            </div>
            <div className='column card'>
              <img
                src={avt1}
                alt=''
                style={{ width: '300px', height: '300px' }}
              />
              <p>Chef</p>
            </div>
            <div className='column card'>
              <img
                src={avt2}
                alt=''
                style={{ width: '300px', height: '300px' }}
              />
              <p>Sous Chef</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;