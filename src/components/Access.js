import { Form } from "antd"
import React from "react"
import { Redirect, Route, Switch } from "react-router-dom"
import App from "./App"
import Login from "./Login"

const WrappedLogin = Form.create()(Login)

const Access = () => (
	<Switch>
		<Route path="/login" render={props => <WrappedLogin {...props} />} />
		<Route
			render={props =>
					localStorage.getItem( "admin" ) == "1" ? (
					<App {...props} />
				) : (
					<Redirect
						to={{
							pathname: "/login",
						}}
					/>
				)
			}
		/>
	</Switch>
)

export default Access
