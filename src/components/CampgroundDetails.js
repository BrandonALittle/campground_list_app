import React from 'react';
import { Consumer } from './Context';

const CampgroundDetails = () => {
  let images = require.context('../img', false); // load images

  return (
    <section id="campground-details">
      <Consumer>
        { ({ campgrounds, currentCampgroundIndex }) => {
          let currentCampground = campgrounds[currentCampgroundIndex] || campgrounds[0]; // set currentCampground to valid value
          let name = currentCampground 
            ? currentCampground.name 
            : 'Select a campground';
          let imageFileName = currentCampground && currentCampground.image ? currentCampground.image : "default.jpg"; // get image filename or default
          let image = images(`./${imageFileName}`); // get image file

          return (
            <React.Fragment>
              <h2>{ name }</h2>
              <img src={ image }/>
            </React.Fragment>
          )
        }}
      </Consumer>
    </section>
  );
}

export default CampgroundDetails;