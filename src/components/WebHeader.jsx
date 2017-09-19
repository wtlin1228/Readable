import React from 'react'
import { Layout } from 'antd';
import HeaderMenu from './HeaderMenu'
const { Header } = Layout;

class WebHeader extends React.Component {
  constructor() {
    super();
  }

  render() {
    const headerStyle = {
      'marginBottom': '20px',
    };

    return (
      <Header style={headerStyle}>
        <HeaderMenu />
      </Header>
    );
  }
}

export default WebHeader
