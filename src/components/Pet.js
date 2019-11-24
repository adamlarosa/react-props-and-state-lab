import React from 'react'

/* All these values should be props. */

class Pet extends React.Component {
  adoptedButton = () => {
    if (this.props.pet.isAdopted) {
      return <center><button 
        className="ui disabled button">
        Already adopted
      </button></center>
    } else {
      return <center><button 
        onClick={() => this.props.onAdoptPet(this.props.pet.id)}
        className="ui primary button">
        Adopt pet
      </button></center>
    }
  }

  render() {
    const {age, gender, name, type, weight} = this.props.pet

    return (
      
      <div className="card">
        <div className="content">
          <a className="header">
            {gender === 'female' ? '♀' : '♂'}
            {name}
          </a>
          <div className="meta">
          <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.adoptedButton()}
          {/* <button className="ui disabled button">Already adopted</button>
          <button className="ui primary button">Adopt pet</button> */}
        </div>
      </div>
    )
  }
}
export default Pet
