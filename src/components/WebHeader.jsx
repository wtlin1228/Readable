import React from 'react'
import { Layout } from 'antd';
import HeaderMenu from './HeaderMenu'
const { Header } = Layout;

class WebHeader extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Header>
        <row>
          <HeaderMenu />
        </row>
      </Header>
    );
  }
}

export default WebHeader
