import React from 'react';
import { connect } from 'react-redux';
import { Col, Menu, Icon } from 'antd';
import * as actionCreators from '../actions'

class HeaderMenu extends React.Component {
  constructor() {
    super();

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
          <Icon type="tag-o" />{category['name']}
        </Menu.Item>
      )
    });

    const menu = [
      <Menu
        key="headerMenu"
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
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
    categoryReducer: store.categoryReducer
  }
);

export default connect(mapStateToProps, actionCreators)(HeaderMenu)
