import React, { Component } from "react"
import { Link } from "react-router-dom"
//connect to our store using {connect}
import { connect } from "react-redux"
//import the action creators relevant to the state that will be affected by this component

import { updateLoanType, updatePropertyType } from "../../ducks/reducer"
class WizardOne extends Component {
  render() {
    //destructuring to make it easier to write. all our methods inside class components will have a this.props suffix since they are
    //held in our reducer and connected to the component
    //if it is a functional component it will just be props.whatever instead of this.props.whatever
    const { updateLoanType, updatePropertyType } = this.props
    return (
      <div className='parent-div'>
        <div className='vert-align'>
          <p>What type of loan will you be needing?</p> <br />
          <select
            onChange={e => {
              updateLoanType(e.target.value)
            }}
          >
            <option type='text' value='Home Purchase'>
              Home Purchase
            </option>
            <option type='text' value='Refinance'>
              Refinance
            </option>
            <option type='text' value='Home Equity'>
              Home Equity loan/line
            </option>
          </select>{" "}
          <br />
          <p>What type of property are you purchasing?</p> <br />
          <select onChange={e => updatePropertyType(e.target.value)}>
            <option value='Single Family Home'>Single Family Home</option>
            <option value='Town Home'>Townhome</option>
            <option value='Condo'>Condo</option>
            <option value='Multi Family Home'>Multi Family Dwelling</option>
            <option value='Mobile Home'>Mobile Home</option>
          </select>
          <Link to='/wTwo'>
            <button className='margin-btn'> Next </button>
          </Link>
        </div>
      </div>
    )
  }
}
//this method will be in every single component. We will need to pass in state and return the state that is
//being affected by this component
const mapStateToProps = state => {
  const { loanType, propertyType } = state
  return {
    loanType,
    propertyType
  }
}
//include connect in our export, invoking connect with mapStateToProps as an argument, the second argument being the methods used in the component

export default connect(
  mapStateToProps,
  { updateLoanType, updatePropertyType }
)(WizardOne)
