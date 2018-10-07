import { Button, Form, Input, Menu, Spin, Icon } from 'antd'
import React from 'react'
import { Redirect } from 'react-router-dom'

const FormItem = Form.Item
const SubMenu = Menu.SubMenu

class Login extends React.Component {
	
	state = {
		login: false
	}
	
	loginUser = e => {
		e.preventDefault()
		
		localStorage.setItem( "admin", "1" )
		
		this.setState({
			login: true
		});
	}
		
	render = () => {
		const { form } = this.props
		const { getFieldDecorator } = form

		const admin = localStorage.getItem( "admin" ) == "1"
		
		const login_icon = (
			<svg 
				className="login-img"
				height="1em"
				width="1em"
				viewBox="0 0 256 290" 
			>
				<g>
					<polygon fill="#FFFFFF" points="128 0.0483018868 256 72.4528302 256 217.310189 128 289.714717 0 217.310189 0 72.4528302" />
					<path d="M233.153208,212.286792 L132.250566,269.427925 L132.250566,224.990189 L195.139623,190.357736 L233.153208,212.286792 Z M240.060377,206.055849 L240.060377,86.6535849 L203.157736,107.954717 L203.157736,184.754717 L240.060377,206.055849 Z M22.4603774,212.286792 L123.363019,269.379623 L123.363019,224.941887 L60.4739623,190.357736 L22.4603774,212.286792 L22.4603774,212.286792 Z M15.5532075,206.055849 L15.5532075,86.6535849 L52.4558491,107.954717 L52.4558491,184.754717 L15.5532075,206.055849 L15.5532075,206.055849 Z M19.8520755,78.925283 L123.363019,20.3833962 L123.363019,63.3720755 L57.0445283,99.84 L56.5132075,100.129811 L19.8520755,78.925283 L19.8520755,78.925283 Z M235.713208,78.925283 L132.250566,20.3833962 L132.250566,63.3720755 L198.520755,99.8883019 L199.052075,100.178113 L235.713208,78.925283 L235.713208,78.925283 Z" fill="#0098DB" />
					<path d="M123.363019,214.846792 L61.3433962,180.697358 L61.3433962,113.123019 L123.363019,148.914717 L123.363019,214.846792 L123.363019,214.846792 Z M132.250566,214.846792 L194.270189,180.74566 L194.270189,113.123019 L132.250566,148.914717 L132.250566,214.846792 Z M65.4973585,105.298113 L127.806792,71.0520755 L190.067925,105.298113 L127.806792,141.234717 L65.4973585,105.298113 L65.4973585,105.298113 Z" fill="#21578A" />
				</g>
			</svg>
		)

		return admin ? (
			<Redirect
				to={{
					pathname: '/',
				}}
			/>
		) : (
			<div className="login">
				<div className="login-cell">
					<div className="login-box">
						{login_icon}
						<div className="login-title">
							<h1>
								Welcome to <span>Crypto</span>
							</h1>
						</div>
						<Form onSubmit={this.loginUser} className="login-form">
							<FormItem className="login-name" label="Login">
								{getFieldDecorator('email', {
									rules: [
										{
											required: true,
											message: 'E-mail is required', 
											whitespace: true
										},
									],
								})(
									<Input
										prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
										placeholder="Enter E-mail"
									/>,
								)}
							</FormItem>
							<FormItem className="login-password" label="Password">
								{getFieldDecorator('pass', {
									rules: [
										{
											required: true,
											message: 'Password is required', 
											whitespace: true
										}, 
									],
								})(
									<Input
										prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
										type="password"
										placeholder="Enter Password"
									/>,
								)} 
							</FormItem>
							<FormItem className="login-submit">
								<Button type="primary" htmlType="submit" className="login-form-button">
									Login
								</Button>
							</FormItem>
						</Form>
					</div>
				</div>
			</div>
		)
	}
}

export default Login
