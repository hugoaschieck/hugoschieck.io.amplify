import React, { Component } from 'react';
import Header from './components/Header/Header';
import SideDrawer from './components/SideDrawer/SideDrawer'
import BackDrop from './components/BackDrop/BackDrop';
import Footer from './components/Footer/Footer'


import { BrowserRouter } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Blogs from './components/Blogs/Blogs';
import Routes from './components/Routes/Routes';

class App extends Component {

  state = {
    sideDrawerOpen: false
  };

  drawerButtonHandler = () => {
    this.setState((previousState) => {
      return { sideDrawerOpen: !previousState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {

    this.setState((previousState) => {
      return { sideDrawerOpen: !previousState.sideDrawerOpen };
    });
  };

  render() {

    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />
      backdrop = <BackDrop click={this.backDropClickHandler} />
    }

    return (
      <BrowserRouter>
        <div className="App" style={{ height: '100%' }}>
          <Header drawerClickHandler={this.drawerButtonHandler} />
          {sideDrawer}
          {backdrop}
          <Route path="/" exact render={
            () => {
              return (
                <main style={{ marginTop: '56px', marginBottom: '56px', overflowY: 'scroll' }}>
                  <Blogs/>
              </main>
              );
            }
          } />

          <Routes />

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
