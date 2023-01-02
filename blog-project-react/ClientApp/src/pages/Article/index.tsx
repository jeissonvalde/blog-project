import React, { Component } from 'react'
import Sheet from './components/sheet'
// import blogs from '../../assets/blogs'
import './styles/index.css'

interface PublicationInterface {
  blogs: any[]
}

export class Publication extends Component<{}, PublicationInterface> {
  constructor(props: any) {
    super(props)

    this.state = {
      blogs: []
    }
  }
  
  componentDidMount() {
    // this.populateWeatherData();
  }


  render() {

    return (
      <div className="Sheet page">

        {this.state.blogs.map((blg, idx) => {

          return (
            <Sheet {...blg} key={idx} />
          )
        })}
      </div>
    )
  }
}