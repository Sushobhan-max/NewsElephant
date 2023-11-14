import React, { Component } from 'react'
import loading from '../images/loading2.gif'
import '../App.css'

export class Loading extends Component {
  render() {
    return (
      <div id='loading' className='text-center my-5'>
        <img src={loading} alt="" />
      </div>
    )
  }
}

export default Loading