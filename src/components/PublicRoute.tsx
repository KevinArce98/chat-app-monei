import { Redirect, Route, RouteComponentProps, RouteProps } from "react-router";
import { getIsLogged } from "../utils/auth";

interface Props extends RouteProps {
    auth: boolean;
    component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const PublicRoute = ({ component: Component, auth, ...rest }: Props) => (
    <Route {...rest} render={(props) => (
        !auth && !getIsLogged() ? <Component {...props} /> : <Redirect to='/' />
    )} />
)

export default PublicRoute
