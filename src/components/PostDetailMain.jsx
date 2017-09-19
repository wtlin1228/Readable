import React from 'react';
import { connect } from 'react-redux';

import { Layout } from 'antd';

const { Content } = Layout;

class PostDetailMain extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    return (
      <Content>
        <p>
          Hi, this is Post Detail view.
        </p>
      </Content>
    );
  }
}

export default PostDetailMain
