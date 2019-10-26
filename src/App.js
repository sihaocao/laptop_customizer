import React from 'react';
import './App.css';
import Header from './Header/Header';
import STORE from './STORE';
import Features from './Features/Features';
import ItemsSummary from './ItemsSummary/ItemsSummary';
import OrderTotal from './OrderTotal/OrderTotal';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      STORE,
      selected: {
        Processor: {
          name: '17th Generation Intel Core HB (7 Core with donut spare)',
          cost: 700
        },
        'Operating System': {
          name: 'Ubuntu Linux 16.04',
          cost: 200
        },
        'Video Card': {
          name: 'Toyota Corolla 1.5v',
          cost: 1150.98
        },
        Display: {
          name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
          cost: 1500
        }
      }
    }
  }

  updateFeature = (feature, item) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = item;
    this.setState({
      selected
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <main>
          <section className="main__form">
            <h3>Customize your laptop</h3> 

            <Features
              features={this.state.STORE.FEATURES}
              selected={this.state.selected}
              updateFeature={(feature, item) => this.updateFeature(feature, item)}
            />
          </section>
          <section className="main__summary">
            <h3>Your cart</h3>
            <ItemsSummary selected={this.state.selected} />
            <OrderTotal selected={this.state.selected} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;