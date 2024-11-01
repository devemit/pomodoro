import { Outlet } from 'react-router-dom';

import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';

import './App.css';

const App = () => {
    return (
        <Layout className='main'>
            <div style={{ maxWidth: '600px' }}>
                <Content
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '2rem',
                    }}
                >
                    <Outlet />
                </Content>
            </div>
        </Layout>
    );
};

export default App;
