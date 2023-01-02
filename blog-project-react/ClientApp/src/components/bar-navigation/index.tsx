import React from 'react';
import { createPortal } from 'react-dom';
import { ReactPropTypes } from 'react';
import { Link } from 'react-router-dom';
import controllers from './controllers';
import "./bar-nav.css";

interface BarNav {
  routes: any[]
}

interface AppRouteInterface {
  index: boolean,
  label: string,
  path: string,
  icon: {
    value: string,
    alt: string
  },
  Element: any
}


class BarNavigation extends React.Component<{}, BarNav> {
  constructor(props: { routes?: any }) {
    console.log(props)
    super(props)

    this.state = {
      routes: props.routes
    }
  }


  render() {
    let routes = this.state.routes

    return createPortal(
      <div className="bar-navigation">
        <ul>
          {routes.map((r: AppRouteInterface, idx: number) => {
    
            return (
              <Link to={r.path} key={idx}>
                <li
                // onClick={controllers.clickLiNavigation.bind(null, r)}
                >
                  
                  <img src={r.icon.value} alt={r.icon.alt} /> 
                  {r.label}
                </li>
              </Link>
            )
          })}
        </ul>
      </div>, document.getElementById('navigation-container') as HTMLElement)
  }
}

export default BarNavigation