import './index.css'

import {Component} from 'react'

import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {inputVal: ''}
  changeValue = event => {
    this.setState({inputVal: event.target.value})
  }
  render() {
    const {destinationsList} = this.props
    const {inputVal} = this.state
    const searchResult = destinationsList.filter(each =>
      each.name.toLowerCase().includes(inputVal.toLowerCase()),
    )
    return (
      <div className="main-container">
        <h1 className="heading">Destination Search</h1>
        <div className="input-container">
          <input
            placeholder="Search"
            className="input-style"
            type="search"
            value={inputVal}
            onChange={this.changeValue}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            alt="search icon"
          />
        </div>
        <ul className="list-item">
          {searchResult.map(each => (
            <DestinationItem itemObj={each} key={each.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
