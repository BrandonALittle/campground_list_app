import React from 'react';
import { Consumer } from './Context';

const CampgroundDetails = () => {
  return (
    <section id="campground-details">
      <Consumer>
        { ({ campgrounds, currentCampgroundIndex }) => {
          currentCampgroundIndex = currentCampgroundIndex || 0;
          let currentCampground = campgrounds[currentCampgroundIndex] 
            ? campgrounds[currentCampgroundIndex].name 
            : 'There are no campgrounds in the list. Please add a campground.';
          return (
            <h2>{ currentCampground }</h2>
          )
        }}
      </Consumer>
    </section>
  );
}

export default CampgroundDetails;