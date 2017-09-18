import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Col, Menu, Icon } from 'antd';
import * as actionCreators from '../actions'

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.getAllCategory()
  }

  handleClick(e) {
    console.log('click ', e);
    this.props.navigate_category(e.key);
    this.setState({
      current: e.key,
    });
  }

  render() {
    const menuStyle = {
      'lineHeight': '64px',
    };

    const menuItem = this.props.categoryReducer.categories.map( (category) => {
      return(
        <Menu.Item key={category['name']}>
          <Link to='/category'/>
          <Icon type="tag-o"/>{category['name']}
        </Menu.Item>
      )
    });

    const menu = [
      <Menu
        key="headerMenu"
        onClick={this.handleClick}
        selectedKeys={this.props.navigationReducer.navigate_category}
        mode="horizontal"
        theme="dark"
        style={menuStyle}
      >
        {menuItem}
      </Menu>
    ];

    return (
      <Col>
        {menu}
      </Col>
    );
  }
}

const mapStateToProps = store => (
  {
    categoryReducer: store.categoryReducer,
    navigationReducer: store.navigationReducer,
  }
);

export default connect(mapStateToProps, actionCreators)(HeaderMenu)
