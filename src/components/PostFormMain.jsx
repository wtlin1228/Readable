import React from 'react';
import * as actionCreators from '../actions'
import { connect } from 'react-redux';

import { Layout } from 'antd';
const { Content } = Layout;

class PostFormMain extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    return (
      <Content>
        <p>Hi, this is Post Form</p>
      </Content>
    );
  }
}

const mapStateToProps = store => (
  {

  }
);

export default connect(mapStateToProps, actionCreators)(PostFormMain)
