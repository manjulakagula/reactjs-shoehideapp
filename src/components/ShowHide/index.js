import {Component} from 'react'
import './index.css'

class ShowHideApp extends Component {
  state = {isFirstName: false, isLastName: false}

  showHide = () => {
    this.setState(prevValue => ({isFirstName: !prevValue.isFirstName}))
  }

  showHide2 = () => {
    this.setState(prevValue => ({isLastName: !prevValue.isLastName}))
  }

  render() {
    const {isFirstName, isLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="name-container">
            <button type="button" className="button" onClick={this.showHide}>
              Show/Hide Firstname
            </button>
            {isFirstName && <p className="first-last-name">Joe</p>}
          </div>
          <div className="name-container">
            <button type="button" className="button" onClick={this.showHide2}>
              Show/Hide Lastname
            </button>
            {isLastName && <p className="first-last-name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHideApp
