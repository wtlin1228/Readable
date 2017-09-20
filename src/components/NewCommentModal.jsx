import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions'
import { Row, Col, Modal, Button, Input, Icon, Select } from 'antd';
const { TextArea } = Input;
const Option = Select.Option;

class NewCommentModal extends React.Component {
  constructor(props) {
    super(props);

    this.showModal = this.showModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.emitUserEmpty = this.emitUserEmpty.bind(this);
    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.emitDescriptionEmpty = this.emitDescriptionEmpty.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);

    this.state = {
      visible: false,
      description: '',
      userName: '',
    }
  }

  componentDidMount() {

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

  showModal() {
    this.setState({
      visible: true,
    });
  }

  handleOk() {
    this.props.newComment(
      this.props.postDetailReducer.post.id,
      this.state.description,
      this.state.userName
    );

    this.setState({
      visible: false,
    });
  }

  handleCancel() {
    this.setState({
      visible: false,
    });
  }

  render() {
    const { visible, description, userName } = this.state;

    const rowStyle = {
      'marginBottom': '20px',
    };

    const inputStyle = {
      'marginBottom': '10px',
    };

    const buttonStyle = {
      'width': '100%',
    };

    const user_suffix = userName ? <Icon type="close-circle" onClick={this.emitUserEmpty} /> : null;

    return (
      <Row type="flex" justify="center" style={rowStyle}>
        <Col span={8}>
          <div>
            <Button type="primary" size="large" style={buttonStyle} onClick={this.showModal}>+ New Comment</Button>
            <Modal
              title="New Comment"
              visible={visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
              okText='Submit'
              cancelText='Cancel'
            >
              <div>
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
    postDetailReducer: store.postDetailReducer,
  }
);

export default connect(mapStateToProps, actionCreators)(NewCommentModal)
