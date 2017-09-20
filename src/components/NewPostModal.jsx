import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions'
import { Row, Col, Modal, Button, Input, Icon, Select } from 'antd';
const { TextArea } = Input;
const Option = Select.Option;

class NewPostModal extends React.Component {
  constructor(props) {
    super(props);

    this.callNewPostApi = this.callNewPostApi.bind(this);
    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.emitUserEmpty = this.emitUserEmpty.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.emitTitleEmpty = this.emitTitleEmpty.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.emitDescriptionEmpty = this.emitDescriptionEmpty.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);

    this.state = {
      visible: false,
      title: '',
      description: '',
      userName: '',
      selected_category: '',
    }
  }

  componentDidMount() {

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

  showModal() {
    this.setState({
      visible: true,
    });
  }

  callNewPostApi() {
    fetch(
      'http://localhost:3001/posts',
      {
        method: 'POST',
        headers: {
          'Authorization': 'wtlin',
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: Date.now(),
          timestamp: Date.now(),
          title: this.state.title,
          body: this.state.description,
          author: this.state.userName,
          category: this.state.selected_category,
        }),
      }
    ).then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return response;
      } else {
        const error = new Error(`HTTP Error ${response.statusText}`);
        error.status = response.statusText;
        error.response = response;
        console.log(error);
        throw error;
      }
    }).then( () => {
      this.props.getAllPosts('all');
      this.setState({
        visible: false,
        confirmLoading: false,
        title: '',
        description: '',
        userName: '',
        selected_category: '',
      })
    })
  }

  handleOk() {
    this.setState({
      confirmLoading: true,
    });

    this.callNewPostApi();
  }

  handleCancel() {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible, confirmLoading, title, description, userName } = this.state;

    const rowStyle = {
      'marginBottom': '20px',
    };

    const inputStyle = {
      'marginBottom': '10px',
    };

    const selectStyle = {
      'width': '200px',
      'marginBottom': '10px',
    };

    const user_suffix = userName ? <Icon type="close-circle" onClick={this.emitUserEmpty} /> : null;
    const title_suffix = title ? <Icon type="close-circle" onClick={this.emitTitleEmpty} /> : null;

    const selectOption = this.props.categoryReducer.categories.map( (category) => {
      return(
        <Option key={category['name']} value={category['name']}>{category['name']}</Option>
      )
    });

    const select = (
      <Select
        showSearch
        style={selectStyle}
        placeholder="Select a category"
        optionFilterProp="category"
        onChange={this.handleSelectChange}
        filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
      >
        {selectOption}
      </Select>
    );

    return (
      <Row type="flex" justify="end" style={rowStyle}>
        <Col span={4}>
          <div>
            <Button type="primary" size="large" onClick={this.showModal}>+ New</Button>
            <Modal
              title="New Post"
              visible={visible}
              onOk={this.handleOk}
              confirmLoading={confirmLoading}
              onCancel={this.handleCancel}
              okText='Submit'
              cancelText='Cancel'
            >
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
                  autosize
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
            </Modal>
          </div>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = store => (
  {
    categoryReducer: store.categoryReducer,
  }
);

export default connect(mapStateToProps, actionCreators)(NewPostModal)
