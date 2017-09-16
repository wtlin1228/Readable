import React from 'react'
import { Layout } from 'antd';

const { Content } = Layout;

class IndexMain extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Content>
        <p>Hi, This is Content</p>
      </Content>
    );
  }
}

export default IndexMain
