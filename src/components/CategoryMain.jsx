import React from 'react';
import * as actionCreators from '../actions'
import { connect } from 'react-redux';
import PostTable from './PostTable';
import NewPostModal from './NewPostModal';

import { Layout } from 'antd';


const { Content } = Layout;

class CategoryMain extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }

  render() {
    return (
      <Content>
        <NewPostModal />
        <PostTable category={this.props.navigationReducer.navigate_category}/>
      </Content>
    );
  }
}

const mapStateToProps = store => (
  {
    navigationReducer: store.navigationReducer,
  }
);

export default connect(mapStateToProps, actionCreators)(CategoryMain)
