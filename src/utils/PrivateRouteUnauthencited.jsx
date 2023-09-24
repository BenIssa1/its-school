import { useSelector } from "react-redux";
import {Route, Redirect} from "react-router-dom"

export const PrivateRouteUnauthencited = ({children, ...rest}) => {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;

    return (

        <Route {...rest} render={() => {
            return !userInfo ? children : <Redirect
            to={{
              pathname: "/",
            }}
          />
        }} />
    )
}
