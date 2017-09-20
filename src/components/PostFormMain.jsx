import React from 'react';
import * as actionCreators from '../actions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Layout, Row, Col, Button, Input, Icon, Select } from 'antd';
const { Content } = Layout;
const { TextArea } = Input;
const Option = Select.Option;

class PostFormMain extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.emitTitleEmpty = this.emitTitleEmpty.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.emitDescriptionEmpty = this.emitDescriptionEmpty.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);

    this.state = {
      title: '',
      description: '',
      userName: '',
      selected_category: '',
    }
  }

  componentDidMount() {
    this.setState({
      title: this.props.postDetailReducer.post.title,
      description: this.props.postDetailReducer.post.body,
      userName: this.props.postDetailReducer.post.author,
      selected_category: this.props.postDetailReducer.post.category,
    });
  }

  emitTitleEmpty() {
    this.titleInput.focus();
    this.setState({ title: '' });
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  emitUserEmpty() {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }

  onChangeUserName(e) {
    this.setState({ userName: e.target.value });
  }

  emitDescriptionEmpty() {
    this.descriptionInput.focus();
    this.setState({ description: '' });
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }

  handleSelectChange(value) {
    this.setState({ selected_category: value });
  }


  render() {
    const { title, description, userName, selected_category } = this.state;

    const user_suffix = userName ? <Icon type="close-circle" onClick={this.emitUserEmpty} /> : null;
    const title_suffix = title ? <Icon type="close-circle" onClick={this.emitTitleEmpty} /> : null;

    const inputStyle = {
      'marginBottom': '10px',
    };

    const selectStyle = {
      'width': '200px',
      'marginBottom': '10px',
    };

    const selectOption = this.props.categoryReducer.categories.map( (category) => {
      return(
        <Option key={category['name']} value={category['name']}>{category['name']}</Option>
      )
    });

    const select = (
      <Select
        showSearch
        style={selectStyle}
        value={selected_category}
        placeholder="Select a category"
        optionFilterProp="category"
        onChange={this.handleSelectChange}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {selectOption}
      </Select>
    );

    return (
      <Content>
        <Row>
          <Col offset={4} span={2}>
            <Link to='/post'>
              <Button type="primary" shape="circle" icon="rollback" size='large'/>
            </Link>
          </Col>
          <Col span={12}>
            <div>
              {select}
              <Input
                placeholder="Enter Title"
                prefix={<Icon type="pushpin" />}
                suffix={title_suffix}
                value={title}
                onChange={this.onChangeTitle}
                style={inputStyle}
                ref={node => this.titleInput = node}
              />
              <TextArea
                placeholder="Enter Description"
                value={description}
                onChange={this.onChangeDescription}
                style={inputStyle}
                autosize={{ minRows: 8 }}
                ref={node => this.descriptionInput = node}
              />
              <Input
                placeholder="Enter your Name"
                prefix={<Icon type="user" />}
                suffix={user_suffix}
                value={userName}
                onChange={this.onChangeUserName}
                style={inputStyle}
                ref={node => this.userNameInput = node}
              />
            </div>
          </Col>
        </Row>
      </Content>
    );
  }
}

const mapStateToProps = store => (
  {
    categoryReducer: store.categoryReducer,
    postDetailReducer: store.postDetailReducer,
  }
);

export default connect(mapStateToProps, actionCreators)(PostFormMain)
