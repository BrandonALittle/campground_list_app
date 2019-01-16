import React, { PureComponent, Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from './Context';

class CampgroundListItem extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired
  };

  render() {
    const { index, currentCampgroundIndex } = this.props;

    return (
        <Consumer>
          { ({ actions, campgrounds }) => (
            <div className="campground-list-item" 
                  id={index === currentCampgroundIndex ? 'current-campground' : null} 
                  onClick={() => actions.handleCurrentCampground(index)}
            >
              <span className="campground-name" >
                <button className="remove-campground" 
                        onClick={() => actions.removeCampground(campgrounds[index].id)}
                >x</button>
                <span>{ campgrounds[index].name }</span>
              </span>
            </div>
          )}
        </Consumer>
    );
  }
}

export default CampgroundListItem;