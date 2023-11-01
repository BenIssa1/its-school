import { useSelector } from "react-redux";
import {useHistory, Route} from "react-router-dom"

export const PrivateRouteAdmin = ({children, ...rest}) => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const history = useHistory();

    return (

        <Route {...rest} render={() => {
            return !userInfo || userInfo.user.role == 'user'  ? history.push('/signin') :children
        }} />
    )
}
