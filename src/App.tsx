import {Generator} from './components/generator/Generator';

import './App.css'
import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';

function App() {

  return (
    <Layout>
      <Header className='header'>Generate UUIDs</Header>
      <Content>
        <Generator />
      </Content>
      </Layout>
  )
}

export default App
