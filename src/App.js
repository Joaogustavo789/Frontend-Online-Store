import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import EmptyCart from './components/EmptyCart';
import CardDetails from './components/CardDetails';
import Card from './components/Card';

class App extends React.Component {
  render() {
    return (
      <section>
        <BrowserRouter>
          <EmptyCart />
          <Route exact path="/" component={ Home } />
          <Route path="/card" component={ Card } />
          <Route path="/cart" component={ Cart } />
          <Route path="/card/:id" component={ CardDetails } />
        </BrowserRouter>
      </section>

    );
  }
}

export default App;
