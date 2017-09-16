import React from 'react';
import { Link } from 'react-router-dom';

import { Layout } from 'antd';


const { Content } = Layout;

class IndexMain extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Content>
        <p>Hi, This is Root</p>
        <Link to="/category">Link to Category View </Link>
      </Content>
    );
  }
}

export default IndexMain
