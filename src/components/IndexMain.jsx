import React from 'react';
import * as actionCreators from '../actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Layout, Button } from 'antd';


const { Content } = Layout;

class IndexMain extends React.Component {
  constructor() {
    super();

    this.checkStatus = this.checkStatus.bind(this);
    this.parseJSON = this.parseJSON.bind(this);
    this.showData = this.showData.bind(this);
    this.handleClickButton = this.handleClickButton.bind(this);
  }

  componentDidMount() {
    fetch(
      'http://localhost:3001/categories',
      {
        headers: { 'Authorization': 'wtlin' },
        accept: 'application/json',
        method: 'get',
      }
    ).then(this.checkStatus).then(this.parseJSON).then(this.showData)
  }

  checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
      const error = new Error(`HTTP Error ${response.statusText}`);
      error.status = response.statusText;
      error.response = response;
      console.log(error);
      throw error;
    }
  }

  parseJSON(response) {
    return response.json();
  }

  showData(data) {
    console.log(data);
  }

  handleClickButton() {
    console.log('Main, call getAllCategories("^_^")');
    this.props.getAllCategory('^_^')
  }

  render() {
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
