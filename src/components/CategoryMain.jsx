import React from 'react';
import * as actionCreators from '../actions'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PostTable from './PostTable';

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
        <PostTable category={this.props.navigationReducer.navigate_category}/>
        <div><Link to='/' onClick={() => {this.props.navigate_category('root')}}>back to home</Link></div>
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
