import { API, graphqlOperation } from 'aws-amplify';

// Hooks
import { useEffect } from 'react';

// Components
import { Layout, Menu, Typography } from 'antd';

// GraphQL
import { listRooms } from '../graphql/queries';
import { AmplifySignOut } from '@aws-amplify/ui-react';

const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;

const ChatPage = () => {

    useEffect(() => {
        getData();

    }, [])

    const getData = async () => {
        const result = await API.graphql(graphqlOperation(listRooms));
        console.log(result);
    }

    return (
        <Layout>
            <Sider width="400px" theme="dark">
                <div className="logo w-100">
                    <Title level={2} className="m-0">Chat App MONEI</Title>
                    <AmplifySignOut/>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        Option 1
                    </Menu.Item>
                    <Menu.Item key="2">
                        Option 2
                    </Menu.Item>
                    <Menu.Item key="9">
                        Files
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </Layout>
    )
}

export default ChatPage
