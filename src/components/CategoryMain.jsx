import React from 'react';
import { Link } from 'react-router-dom';

import { Layout } from 'antd';


const { Content } = Layout;

class CategoryMain extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Content>
        <p>Hi, This is Category</p>
        <Link to="/">Link to Root View </Link>
      </Content>
    );
  }
}

export default CategoryMain
