import React from 'react';
import { Consumer } from './Context';
import { Link } from 'react-router-dom';
import CampgroundListItem from './CampgroundListItem';

const CampgroundList = () => {
  return (
    <section id="sidebar">
      <div className="campground-list-header">
        <h3>Campgrounds</h3>
      </div>
      <Consumer>
        { ({ campgrounds, currentCampgroundIndex }) => (
          <div>
            { campgrounds.map ( (campground, index ) => 
              <CampgroundListItem 
                key={campground.id.toString()}
                index={index}
                currentCampgroundIndex={currentCampgroundIndex}
              />
            )}
          </div>
        )} 
      </Consumer>
      <div id="addCampground">
        <Link to={{
          pathname: "/add",
          state: { modal: true }}}
          >ADD CAMPGROUND</Link>
      </div>
    </section>
  );
}

export default CampgroundList;