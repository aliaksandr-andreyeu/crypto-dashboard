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

		return admin ? (
			<Redirect
				to={{
					pathname: '/',
				}}
			/>
		) : (
			<div className="login">
				<div className="table-cell-page">
					<div className="wrapped_login">
						<div className="login-title">
							<div className="login-logo">
								<svg width="240px" height="160px" viewBox="0 0 136.37 83.04">
									<defs>
										<style>{`.cls-1{fill:#251b00} .cls-2{fill:#66c05d}`}</style>
									</defs>
									<path d="M12.21 80.69l8.28-8.31-2.78-2.79-5.19 5.21-9.43-9.47L0 68.44l12.21 12.25zM15.62 57.76l2.09 2.09L22 55.53l2.49 2.5-4.3 4.32 2.66 2.66 5.31-5.33 2.49 2.5-8.4 8.44-12.22-12.25 8.41-8.45 2.49 2.5-5.31 5.34zM42.81 50l-8.31-2.39a5.22 5.22 0 0 0-1.15-6 4.9 4.9 0 0 0-7 .32l-6.19 6.21L32.43 60.4l3.1-3.11-9.88-9.92 2-2a2.23 2.23 0 0 1 3.16-.06 2.25 2.25 0 0 1-.05 3.18l-1.82 1.83 10.56 3zM37.22 30.54c3.82-3.83 8.87-3.46 12.44.13s3.95 8.66.13 12.49-8.86 3.46-12.44-.16-3.95-8.66-.13-12.49M39.64 33c-1.94 1.94-1.29 4.31 1.07 6.68s4.71 3 6.65 1.07 1.29-4.31-1.07-6.68S41.58 31 39.64 33M53.34 24.1l-2.28-6.92 3.62-3.63 3.03 11.87 4.78 4.8-3.09 3.11-4.76-4.78-11.33-3.59 3.41-3.42 6.55 2.55.07.01zM109.83 66.34l12.22-12.25-3.26-3.27-12.21 12.25 3.25 3.27zM63.11 19.44l9.5-4.55-7.02 7.04 2.83 2.84 12.2-12.26-3.87-3.89-9.19 4.5 4.6-9.11-4-4.01-12.21 12.25 2.82 2.84 7.02-7.04-4.53 9.53 1.85 1.86zM84.28 21.18l-2.09 2.09 4.69 4.7-2.49 2.5-4.68-4.7-2.66 2.66 5.7 5.72-2.49 2.5-8.8-8.83 12.21-12.26 8.8 8.83-2.49 2.5-5.7-5.71zM96.06 52.53l8.28 8.32 2.79-2.8-5.19-5.2 9.43-9.47-3.1-3.1-12.21 12.25zM128.96 61.02l-3.92 12.99h-.01l8.44-8.46 2.9 2.91-12.21 12.25-3.83-3.84 3.34-13.39h.01l-8.34 8.37-2.82-2.83 12.2-12.25 4.24 4.25zM93.75 50.21l2.35-8.34a5.17 5.17 0 0 0 6-1.16 4.94 4.94 0 0 0-.31-7l-6.57-6.6L83 39.4l3.1 3.11 9.9-9.92L98.35 35a2.2 2.2 0 1 1-3.11 3.12L93 35.89l-2.6 11z" />
									<path className="cls-2" d="M14.53 83.04h107.33L68.19 29.17 14.53 83.04z" />
								</svg>
							</div>
							<h1>Welcome_to_Booking</h1>
							<p>Please_identify_yourself</p>
						</div>
						<Form onSubmit={this.loginUser} className="login-form">
							<FormItem className="login-name" label="Login">
								{getFieldDecorator('email', {
									rules: [
										{
											required: true,
										},
									],
								})(
									<Input
										prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
										placeholder="RU1000\60012345"
										onChange={() => this.setState({ error: false })}
									/>,
								)}
							</FormItem>
							<FormItem className="login-password" label="Password">
								{getFieldDecorator('pass', {
									rules: [
										{
											required: true,
										}, 
									],
								})(
									<Input
										prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
										type="password"
										placeholder=""
										onChange={() => this.setState({ error: false })}
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
