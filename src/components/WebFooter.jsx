import React from 'react'
import { Layout } from 'antd';

const { Footer } = Layout;

class WebFooter extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Footer>
        <p>Hi, This is Footer</p>
      </Footer>
    );
  }
}

export default WebFooter
