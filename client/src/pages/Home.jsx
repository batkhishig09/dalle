import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = ({ images }) => {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true,
  };

  return (
      <div className="banner">
         <div className='slider'>
            <div className="slide-container">
           {images && images.length > 0 ? (
          <Slide {...properties}>
            {images.map((image) => (
              <div key={image._id} className="each-slide">
                <img
                  className="w-full h-auto object-cover rounded-xl"
                  src={image.photo}
                  alt={image.prompt}
                />
              </div>
            ))}
          </Slide>
        ) : (
          <div>
            <p>No images to display.</p>
          </div>
        )}
      </div>
                </div>
                <div className='overlay'>

                <div className="content">
                  <h1 className='text-5xl font-medium leading-10'>Let's start generating pictures</h1>
                  <h3 className=' mx-auto my-20 font-thin leading-6'>
                  DALL is an AI system that can create realistic images and art from a description in natural language.
                  Feel free to generate your idea and share it to the community!

                  </h3>
                  <div>
                 
                    <Link type='button' to="/community" className="home-button" > EXPLORE MORE</Link>
                    </div>
                    </div>
                  </div>
                </div>
  );
};

export default Home;
