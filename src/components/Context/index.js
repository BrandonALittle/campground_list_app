import React, { Component } from 'react';

const CampgroundContext = React.createContext();

export class Provider extends Component {

    state = {
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
        }
      ]
    };

    handleAddCampground = (name) => {
      this.setState(prevState => {
        return {
          campgrounds: [
            ...prevState.campgrounds,
            {
              name,
              id: prevState.campgrounds.length + 1,
            }
          ]
        }
      })
    }

    handleRemoveCampground = (id) => {
      this.setState(prevState => {
        return {
          campgrounds: prevState.campgrounds.filter(cg => cg.id !== id)
        }
      })
    }

    render = () => {
      return (
        <CampgroundContext.Provider value={{
          campgrounds: this.state.campgrounds,
          actions: {
            addCampground: this.addCampground,
            removeCampground: this.handleRemoveCampground,
          }
        }}>
          { this.props.children }
        </CampgroundContext.Provider>
      );
    }
}

export const Consumer = CampgroundContext.Consumer;