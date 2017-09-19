import React from 'react';
import * as actionCreators from '../actions'
import { connect } from 'react-redux';
import PostTable from './PostTable';
import NewPostModal from './NewPostModal';

import { Layout } from 'antd';


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
        <NewPostModal />
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
