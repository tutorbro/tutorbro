import React from 'react';
import dynamic from 'next/dynamic';
import Header from '../components/Header';
import Home from '../components/Home';
import Subjects from '../components/Subjects';
import Services from '../components/Services';
import Footer from '../components/Footer';
import { initGA, logPageView } from '../utils/analytics';
const AlertContainer = dynamic(import('react-alert'), { ssr: false });

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.alertOptions = {
      offset: 14,
      position: 'top right',
      theme: 'dark',
      time: 5000,
      transition: 'scale',
    };
  }
  componentDidMount() {
    initGA();
    logPageView();
    console.log('from do');
  }
  render() {
    return (
      <div>
        <Header title="TutorBro | Get Personal Tutor For Homework Help" />
        <main>
          <Home />
          <Subjects />
          <Services />
          <Footer home />
        </main>
        <AlertContainer
          ref={a => {
            global.msg = a;
          }}
          {...this.alertOptions}
        />
        <style jsx>
          {`
            main {
              padding-top: 10px;
            }
          `}
        </style>
      </div>
    );
  }
}
