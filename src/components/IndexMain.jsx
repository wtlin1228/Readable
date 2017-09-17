import React from 'react';
import * as actionCreators from '../actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Layout, Button } from 'antd';


const { Content } = Layout;

class IndexMain extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickButton = this.handleClickButton.bind(this);
  }

  componentDidMount() {

  }



  handleClickButton() {
    console.log('Main, call getAllCategories("^_^")');
    this.props.getAllCategory('^_^')
  }

  render() {
    console.log(this.props.categoryReducer.categories);

    return (
      <Content>
        <p>Hi, This is Root</p>
        <Link to="/category">Link to Category View </Link>
        <Button type="primary" onClick={() => this.handleClickButton()}>Get all Category</Button>

      </Content>
    );
  }
}

const mapStateToProps = store => (
  {
    categoryReducer: store.categoryReducer
  }
);

export default connect(mapStateToProps, actionCreators)(IndexMain)
