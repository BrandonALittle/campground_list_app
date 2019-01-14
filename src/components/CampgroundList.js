import React from 'react';
import { Consumer } from './Context';
import CampgroundListItem from './CampgroundListItem';
import { Link } from 'react-router-dom';

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
      <div id="addCampground">
        <Link to={{
          pathname: "/add",
          state: { modal: true }}}>ADD CAMPGROUND</Link>
      </div>
    </section>
  );
}

export default CampgroundList;