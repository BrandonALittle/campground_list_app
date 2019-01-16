import React from 'react';
import { Consumer } from './Context';

const CampgroundDetails = () => {
  let images = require.context('../img', false);

  return (
    <section id="campground-details">
      <Consumer>
        { ({ campgrounds, currentCampgroundIndex }) => {
          let currentCampground = campgrounds[currentCampgroundIndex] || campgrounds[0];
          let name = currentCampground 
            ? currentCampground.name 
            : 'Select a campground';
          let imageFileName = currentCampground && currentCampground.image ? currentCampground.image : "default.jpg";
          let image = images(`./${imageFileName}`);

          return (
            <React.Fragment>
              <h2>{ name }</h2>
              <img src={image}/>
            </React.Fragment>
          )
        }}
      </Consumer>
    </section>
  );
}

export default CampgroundDetails;