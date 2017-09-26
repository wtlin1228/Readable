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

    this.emitTitleEmpty = this.emitTitleEmpty.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);

    this.state = {
      title: '',
      description: '',
    }
  }

  componentDidMount() {
    this.setState({
      title: this.props.postDetailReducer.post.title,
      description: this.props.postDetailReducer.post.body,
    });
  }

  emitTitleEmpty() {
    this.titleInput.focus();
    this.setState({ title: '' });
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value });
  }

  onChangeDescription(e) {
    this.setState({ description: e.target.value });
  }


  handleUpdate() {
    console.log(this.state);
    this.props.updatePost(
      this.props.postDetailReducer.post.id,
      this.state.title,
      this.state.description
    )
  }

  render() {
    const { title, description } = this.state;
    const { post } = this.props.postDetailReducer;

    const title_suffix = title ? <Icon type="close-circle" onClick={this.emitTitleEmpty} /> : null;

    const inputStyle = {
      'marginBottom': '10px',
    };

    const rowStyle = {
      'margin': '15px',
    };


    return (
      <Content>
        <Row style={rowStyle}>
          <Col offset={4} span={2}>
            <Link to={ '/' + post.category + '/' + post.id }>
              <Button type="primary" shape="circle" icon="rollback" size='large'/>
            </Link>
          </Col>
          <Col span={12}>
            <div>
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
            </div>
          </Col>
        </Row>
        <Row style={rowStyle}>
          <Col offset={16}>
            <Link to={ '/' + post.category + '/' + post.id }>
              <Button type="primary" icon="sync" ghost onClick={this.handleUpdate}>Update</Button>
            </Link>
          </Col>
        </Row>
      </Content>
    );
  }
}

const mapStateToProps = store => (
  {
    postDetailReducer: store.postDetailReducer,
  }
);

export default connect(mapStateToProps, actionCreators)(PostFormMain)
