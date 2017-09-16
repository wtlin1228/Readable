import React from 'react';

import { Layout } from 'antd'

import WebHeader from '../components/WebHeader'
import WebFooter from '../components/WebFooter'
import CategoryMain from '../components/CategoryMain'

class Category extends React.Component {
  render() {

    return (
      <Layout>
        <WebHeader />
        <CategoryMain />
        <WebFooter />
      </Layout>

    )
  }
}

export default Category