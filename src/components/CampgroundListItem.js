import React, { PureComponent, Component } from 'react';
//import PropTypes from 'prop-types';
import { Consumer } from './Context';

class CampgroundListItem extends Component {
  // static propTypes = {
  //   index: PropTypes.number.isRequired
  // };

  render() {
    const { index } = this.props;

    return (
      <div className="campground-list-item">
        <Consumer>
          { ({ actions, campgrounds }) => (
            <span className="campground-name">
              <button className="remove-campground" onClick={() => actions.removeCampground(campgrounds[index].id)}>x</button>
              { campgrounds[index].name }
            </span>
          )}
        </Consumer>
      </div>
    );
  }
}

export default CampgroundListItem;