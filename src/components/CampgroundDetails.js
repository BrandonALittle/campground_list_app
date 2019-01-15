import React from 'react';
import { Consumer } from './Context';
import campgroundImg from '../img/campground_(2).jpg';

const CampgroundDetails = () => {
  return (
    <section id="campground-details">
      <Consumer>
        { ({ campgrounds, currentCampgroundIndex }) => {
          {/* currentCampgroundIndex = currentCampgroundIndex || 0; */}
          let currentCampground = campgrounds[currentCampgroundIndex] 
            ? campgrounds[currentCampgroundIndex].name 
            : 'Select a campground';
          return (
            <React.Fragment>
            <h2>{ currentCampground }</h2>
            <img src={campgroundImg}/>
            </React.Fragment>
          )
        }}
      </Consumer>
    </section>
  );
}

export default CampgroundDetails;