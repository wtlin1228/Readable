import React from 'react';
import * as actionCreators from '../actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostTable from './PostTable';

import { Layout, Button } from 'antd';


const { Content } = Layout;

class IndexMain extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    return (
      <Content>
        <PostTable category='all'/>
      </Content>
    );
  }
}

const mapStateToProps = store => (
  {

  }
);

export default connect(mapStateToProps, actionCreators)(IndexMain)
