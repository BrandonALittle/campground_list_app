import React, { Component } from 'react';

const CampgroundContext = React.createContext();

export class Provider extends Component {

    state = JSON.parse(localStorage.getItem('campgroundState')) || {
      campgrounds: [
        {
          name: "Matarredonda",
          id: 1,
        },
        {
          name: "Salento",
          id: 2,
        },
        {
          name: "Gairaca",
          id: 3
        },
        {
          name: "Balneario de Villa Concha",
          id: 4
        },
        {
          name: "Parque de Los Angeles",
          id: 5
        },
        {
          name: "El Heronsito de los Heronsitos",
          id: 6
        }
      ],
      currentCampgroundIndex: null,
    };

    componentDidUpdate() {
      localStorage.setItem('campgroundState', JSON.stringify(this.state));
    }

    handleAddCampground = (name) => {
      this.setState( prevState => {
        return {
          campgrounds: [
            ...prevState.campgrounds,
            {
              name,
              id: prevState.campgrounds.length + 1,
            }
          ]
        }
      });
    }

    handleRemoveCampground = (id) => {
      this.setState( prevState => {
        return {
          campgrounds: prevState.campgrounds.filter(cg => cg.id !== id)
        }
      });
    }

    handleCurrentCampground = (index) => {
      this.setState({
          currentCampgroundIndex: index
        });
    }

    render = () => {
      return (
        <CampgroundContext.Provider value={{
          campgrounds: this.state.campgrounds,
          currentCampgroundIndex: this.state.currentCampgroundIndex,
          actions: {
            addCampground: this.handleAddCampground,
            removeCampground: this.handleRemoveCampground,
            handleCurrentCampground: this.handleCurrentCampground,
          }
        }}>
          { this.props.children }
        </CampgroundContext.Provider>
      );
    }
}

export const Consumer = CampgroundContext.Consumer;