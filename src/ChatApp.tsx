import { BrowserRouter as Router, Switch } from "react-router-dom";

import 'antd/dist/antd.css';
import './assets/scss/general.scss';

// Pages
import Chat from './pages/Chat';
import Login from "./pages/Login";
import Register from "./pages/Register";

// Components
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import AuthContextProvider, { AuthContext } from "./context/authContext";
import { useContext } from "react";

const ChatApp = () => {

    const { isAuth } = useContext(AuthContext);

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/login" component={Login} auth={isAuth} />
                    <PublicRoute path="/register" component={Register} auth={isAuth} />
                    <PrivateRoute path="/" component={Chat} auth={isAuth} />
                </Switch>
            </div>
        </Router>
    );
}

const Providers = () => (
    <AuthContextProvider>
        <ChatApp />
    </AuthContextProvider>
)

export default Providers;
