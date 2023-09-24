import { useSelector } from "react-redux";
import {useHistory, Route} from "react-router-dom"

export const PrivateRoute = ({children, ...rest}) => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const history = useHistory();

    return (

        <Route {...rest} render={() => {
            return !userInfo ? history.push('/signin') :children
        }} />
    )
}
