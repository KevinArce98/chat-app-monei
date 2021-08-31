import { Auth } from 'aws-amplify';

// Components
import { Form, Input, Button, Card } from 'antd';
import { Link, useHistory } from 'react-router-dom';

// Utils
import { sweetAlert } from '../utils/alerts';
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';


const Login = () => {

    const history = useHistory();
    const { setIsSignedIn } = useContext(AuthContext);
    const [form] = Form.useForm();

    const handleSubmit = async (values: any) => {
        try {
            const user = await Auth.signIn(values.username, values.password);
            setIsSignedIn(true, user);
            history.replace('/');
        } catch (error: any) {
            sweetAlert('Error!', error.message, 'error');
        }
    }

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <Card title="Login" bordered={true} className="w-50">
                <Form
                    name="register-form"
                    form={form}
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"

                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item wrapperCol={{ span: 24 }} className="text-end">
                        <Link to="/register">
                            <Button type="link" className="me-3">
                                Create account
                            </Button>
                        </Link>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Card>

        </div>
    )
}

export default Login
