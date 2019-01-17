import React, { Component } from 'react';

const CampgroundContext = React.createContext();

export class Provider extends Component {

    state = JSON.parse(localStorage.getItem('campgroundState')) || { // check local storage first and load state
      campgrounds: [
        {
          name: "Matarredonda",
          id: 1,
          image: "matarredonda.jpg"
        },
        {
          name: "Valle del Cocora",
          id: 2,
          image: "salento.jpg"
        },
        {
          name: "La Guajira",
          id: 3,
          image: "guajira.jpg"
        },
        {
          name: "Balneario de Villa Concha",
          id: 4,
          image: "balneario.jpg"
        },
        {
          name: "Las Gachas de Guadalupe",
          id: 5,
          image: "lasGachas.jpg"
        },
        {
          name: "Cerros de Mavecure",
          id: 6,
          image: "mavecure.jpg"
        },
        {
          name: "Caño Cristales",
          id: 7,
          image: "canoCristales.jpg"
        },
        {
          name: "Tayrona Parque Nacional",
          id: 8,
          image: "tayrona.jpg"
        },
        {
          name: "Tatacoa Desert",
          id: 9,
          image: "tatacoa.jpg"
        },
        {
          name: "Los Estoraques",
          id: 10,
          image: "losEstoraques.jpg"
        }
      ],
      currentCampgroundIndex: null,
    };

    componentDidUpdate() {
      localStorage.setItem('campgroundState', JSON.stringify(this.state)); // update local storage
    }

    handleAddCampground = (name) => {
      let isInList = this.state.campgrounds.reduce((isInList, campground) => { // check for name in list
        return campground.name == name;
      }, false);

      if (!isInList) { 
        this.setState( prevState => {
          return {
            campgrounds: [
              ...prevState.campgrounds,
              {
                name,
                id: prevState.campgrounds.length + 1,
              }
            ],
            currentCampgroundIndex: prevState.campgrounds.length, // set current campground to the new campground
          }
        });
      }
    }

    handleRemoveCampground = (id) => {
      this.setState( prevState => {
        return {
          campgrounds: prevState.campgrounds.filter(campground => campground.id !== id)
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