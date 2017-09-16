import React from 'react'
import { Layout } from 'antd';

const { Header } = Layout;

class WebHeader extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Header>
        <p>Hi, This is Header</p>
      </Header>
    );
  }
}

export default WebHeader
