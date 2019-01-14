import React from 'react';
import { Consumer } from './Context';
import CampgroundListItem from './CampgroundListItem';

const CampgroundList = () => {
  return (
    <section id="sidebar">
      <Consumer>
        { ({ campgrounds }) => (
          <div>
            { campgrounds.map ( (campground, index ) => 
              <CampgroundListItem 
                key={campground.id.toString()}
                index={index}
              />
            )}
          </div>
        )} 
      </Consumer>
      <div id="addCampground"></div>
    </section>
  );
}

export default CampgroundList;