import './App.css';
import { Layout } from 'antd';
import AppHeader from './components/common/header';
import Home from './components/views/home';
const { Header, Content } = Layout;

function App() {
  return (
      <Layout className='mainLayout'>
        <Header>
          <AppHeader/>
        </Header>
        <Content>
          <Home/>
        </Content>
      </Layout>
  );
}

export default App;