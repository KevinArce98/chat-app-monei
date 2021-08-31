import { Auth } from 'aws-amplify';

// Components
import { Form, Input, Button, Card } from 'antd';
import { Link } from 'react-router-dom';

// Utils
import { sweetAlert } from '../utils/alerts';


const Register = () => {

    const [form] = Form.useForm();

    const handleSubmit = async (values: any) => {
        try {
            const { user } = await Auth.signUp(values);
            sweetAlert('Signed up!', `${user.getUsername()} user successfully registered`, 'success');
            form.resetFields();
        } catch (error:any) {
            sweetAlert('Error!', error.message, 'error');
        }
    }

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <Card title="Register" bordered={true} className="w-50">
                <Form
                    name="register-form"
                    labelCol={{ span: 24 }}
                    wrapperCol={{ span: 24 }}
                    form={form}
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
                        <Link to="/login">
                            <Button type="primary" danger ghost className="me-3">
                                Back
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

export default Register
