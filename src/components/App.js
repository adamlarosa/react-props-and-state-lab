import React from 'react'
import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }
  componentDidMount(){
    this.onFindPetsClick();
  }
 
  onChangeType = (selection) => {
    this.setState({
      filters: {
        type: selection
      }
    })
  }

  onFindPetsClick = () => {
    const {type} = this.state.filters
    fetch(type === 'all' ? '/api/pets' : `/api/pets?type=${type}`)
      .then(resp => resp.json())
      .then(petsFetch => {
        this.setState({
          pets: petsFetch
        })
      })
  }

  onAdoptPet = petId => {
    const pets = this.state.pets.map(p => {
      return p.id === petId ? { ...p, isAdopted: true } : p;
    });
    this.setState({ pets });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} 
                onFindPetsClick={this.onFindPetsClick}/>
            </div><br/>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
