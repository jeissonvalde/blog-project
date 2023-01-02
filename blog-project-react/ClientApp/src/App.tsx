import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import BarNavigation from './components/bar-navigation';
import './utils/index.css';

interface AppInterface {
  routes: any
}

export default class App extends Component<{}, AppInterface> {
  static displayName = App.name;
  constructor(props: { routes: any }) {
    super(props)

    this.state = {
      routes: AppRoutes as any
    }
  }

  render() {
    let routes = this.state.routes

    return (
      <div>
        <BarNavigation routes={routes} />
        <Routes>
          {AppRoutes.map((route, index) => {
            const { Element, ...rest } = route;
            return <Route key={index} {...rest} element={<Element />} />;
          })}
        </Routes>
      </div>
    );
  }
}
