import React, { Component } from 'react';
import { Container } from 'reactstrap';

interface PropsData {
  children: any
}

export class Layout extends Component<{}, PropsData> {
  children: any
  constructor(props: PropsData) {
    super(props)
    // this.children

    this.state = {
      children: props.children
    }
  }

  static displayName = Layout.name;

  render() {
    return (
      <div>
        <Container>
          {this.state.children}
        </Container>
      </div>
    );
  }
}
