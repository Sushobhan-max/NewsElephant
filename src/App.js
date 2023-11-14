import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Newscom from './components/Newscom';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  state = {
    progress: 0,
    mode: 'light',
    modeicon: 'sun'
  }

  progressbar = (progress) => {
    this.setState({
      progress: progress
    })
  }

  togglemodes = () => {
    if (this.state.mode === 'light') {
      document.body.style.backgroundColor = 'black'

      let card = document.body.querySelectorAll('.card-body')
      for (let i = 0; i<card.length;i++){
        card[i].style.background = 'black'
      }

      let cardtxt = document.body.querySelectorAll('.card-body')
      for (let i = 0; i<cardtxt.length;i++){
        cardtxt[i].style.color = 'white'
      }

      this.setState({
        mode: 'dark',
      })

    }
    else {
      document.body.style.backgroundColor = 'white'

      let card = document.body.querySelectorAll('.card-body')
      for (let i = 0; i<card.length;i++){
        card[i].style.background = ''
      }

      let cardtxt = document.body.querySelectorAll('.card-body')
      for (let i = 0; i<cardtxt.length;i++){
        cardtxt[i].style.color = ''
      }

      this.setState({
        mode: 'light',
      })
    }
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar togglemodes={this.togglemodes} modeicons={this.state.mode} />

          <LoadingBar
            height={3}
            color='#ff2100'
            progress={this.state.progress}
          />

          <Routes>
            <Route path='/' element={<Newscom key={'general'} progressbar={this.progressbar} country='in' category='General' pagesize={9} />} />
            <Route path='/business' element={<Newscom key={'business'} progressbar={this.progressbar} country='in' category='Business' pagesize={9} />} />
            <Route path='/entertainment' element={<Newscom key={'entertainment'} progressbar={this.progressbar} country='in' category='Entertainment' pagesize={9} />} />
            <Route path='/health' element={<Newscom key={'health'} progressbar={this.progressbar} country='in' category='Health' pagesize={9} />} />
            <Route path='/science' element={<Newscom key={'science'} progressbar={this.progressbar} country='in' category='Science' pagesize={9} />} />
            <Route path='/sports' element={<Newscom key={'sports'} progressbar={this.progressbar} country='in' category='Sports' />} />
            <Route path='/technology' element={<Newscom key={'technology'} progressbar={this.progressbar} country='in' category='Technology' pagesize={9} />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    )
  }
}


