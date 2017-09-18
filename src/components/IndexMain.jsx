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
        {/*<p>Hi, This is Root</p>*/}
        {/*<Link to="/category">Link to Category View </Link>*/}
        <PostTable />
      </Content>
    );
  }
}

const mapStateToProps = store => (
  {

  }
);

export default connect(mapStateToProps, actionCreators)(IndexMain)
