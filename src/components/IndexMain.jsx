import React from 'react';
import { connect } from 'react-redux';
import PostTable from './PostTable';
import NewPostModal from './NewPostModal';

import { Layout } from 'antd';


const { Content } = Layout;

class IndexMain extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Content>
        <NewPostModal />
        <PostTable category='all'/>
      </Content>
    );
  }
}

export default IndexMain
