import React from 'react'
import Header from '../components/Header'
import Home from '../components/Home'
import Subjects from '../components/Subjects'
import Services from '../components/Services'
import Footer from '../components/Footer'
import { logPageView } from '../utils/analytics'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isBrowser: false }
    this.alertOptions = {
      offset: 14,
      position: 'top right',
      theme: 'dark',
      time: 5000,
      transition: 'scale'
    }
  }
  componentDidMount () {
    this.alertContainer = require('react-alert')
    this.setState({ isBrowser: true })
    logPageView()
  }
  render () {
    const AlertContainer = this.state.isBrowser && this.alertContainer
    return (
      <div>
        <Header title='TutorBro | Get Personal Tutor For Homework Help' />
        <main>
          <Home />
          <Subjects />
          <Services />
          <Footer home />
        </main>
        {this.state.isBrowser && (
        <AlertContainer
          ref={a => {
            global.msg = a
          }}
          {...this.alertOptions}
              />
            )}
        <style jsx>
          {`
            main {
              padding-top: 10px;
            }
          `}
        </style>
      </div>
    )
  }
}
