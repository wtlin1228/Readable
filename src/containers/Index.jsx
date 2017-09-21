import React from 'react';

import { Layout } from 'antd'

import WebHeader from '../components/WebHeader'
import WebFooter from '../components/WebFooter'
import IndexMain from '../components/IndexMain'

class Index extends React.Component {
  render() {

    return (
      <Layout>
        <WebHeader />
        <IndexMain />
        <WebFooter />
      </Layout>
    )
  }
}

export default Index