import { Form, Layout, LocaleProvider, Menu, notification } from "antd"

import React from "react"

import FaHome from "react-icons/lib/fa/home"
import FaSignOut from "react-icons/lib/fa/sign-out"

import { Link, NavLink, Redirect, Route, Switch, withRouter } from "react-router-dom"

import Home from "./Home"
import Bitcoin from "./Bitcoin"
import Ethereum from "./Ethereum"

import "./index.sass"

const { Header, Sider, Content } = Layout

class App extends React.Component {

	state = {
		selectHomeBTC: 'all',
		selectHomeETH: 'all',
		
		selectCmpBTC: 'all',
		selectCmpETH: 'all',
		
		BTC_data: false,
		ETH_data: false, 
	}
	
	handleSelectHomeBTC = value => {
		this.setState({
			selectHomeBTC: value,
		})
	}

	handleSelectHomeETH = value => {
		this.setState({
			selectHomeETH: value,
		})
	}

	handleSelectCmpBTC = value => {
		this.setState({
			selectCmpBTC: value,
		})
	}
	
	handleSelectCmpETH = value => {
		this.setState({
			selectCmpETH: value,
		})
	}
	
	handleSetDataBTC = value => {
		this.setState({
			BTC_data: value,
		})
	}

	handleSetDataETH = value => {
		this.setState({
			ETH_data: value,
		})
	}
	
	render = () => {
		
		const routes = [
			{
				path: "/",
				exact: true,
				render: () => <Home 
					handleSelectBTC={this.handleSelectHomeBTC} 
					handleSelectETH={this.handleSelectHomeETH} 
					selectBTC={this.state.selectHomeBTC} 
					selectETH={this.state.selectHomeETH} 
					handleSetDataBTC={this.handleSetDataBTC} 
					handleSetDataETH={this.handleSetDataETH} 
					BTC_data={this.state.BTC_data} 
					ETH_data={this.state.ETH_data} 
				/>,
			},
			{
				path: "/bitcoin",
				render: () => <Bitcoin 
					handleSelectBTC={this.handleSelectCmpBTC} 
					selectBTC={this.state.selectCmpBTC} 
					handleSetDataBTC={this.handleSetDataBTC} 
					BTC_data={this.state.BTC_data} 
				/>
			},
			{
				path: "/ethereum",
				render: () => <Ethereum 
					handleSelectETH={this.handleSelectCmpETH} 
					selectETH={this.state.selectCmpETH} 
					handleSetDataETH={this.handleSetDataETH} 
					ETH_data={this.state.ETH_data} 
				/>
			},
		]

		const routesMap = routes.map((route, i) => <Route {...route} key={i} />)
		
		const logo_icon = (
			<svg 
				className="logo-img"
				height="1em"
				width="1em"
				viewBox="0 0 256 290" 
			>
				<g>
					<path d="M233.153208,212.286792 L132.250566,269.427925 L132.250566,224.990189 L195.139623,190.357736 L233.153208,212.286792 Z M240.060377,206.055849 L240.060377,86.6535849 L203.157736,107.954717 L203.157736,184.754717 L240.060377,206.055849 Z M22.4603774,212.286792 L123.363019,269.379623 L123.363019,224.941887 L60.4739623,190.357736 L22.4603774,212.286792 L22.4603774,212.286792 Z M15.5532075,206.055849 L15.5532075,86.6535849 L52.4558491,107.954717 L52.4558491,184.754717 L15.5532075,206.055849 L15.5532075,206.055849 Z M19.8520755,78.925283 L123.363019,20.3833962 L123.363019,63.3720755 L57.0445283,99.84 L56.5132075,100.129811 L19.8520755,78.925283 L19.8520755,78.925283 Z M235.713208,78.925283 L132.250566,20.3833962 L132.250566,63.3720755 L198.520755,99.8883019 L199.052075,100.178113 L235.713208,78.925283 L235.713208,78.925283 Z" fill="#ffffff" />
					<path d="M123.363019,214.846792 L61.3433962,180.697358 L61.3433962,113.123019 L123.363019,148.914717 L123.363019,214.846792 L123.363019,214.846792 Z M132.250566,214.846792 L194.270189,180.74566 L194.270189,113.123019 L132.250566,148.914717 L132.250566,214.846792 Z M65.4973585,105.298113 L127.806792,71.0520755 L190.067925,105.298113 L127.806792,141.234717 L65.4973585,105.298113 L65.4973585,105.298113 Z" fill="#ffffff" />
				</g>
			</svg>
		)		
		
		const bitcoin_icon = (
			<svg
				fill="currentColor"
				preserveAspectRatio="xMidYMid meet"
				height="1em"
				width="1em"
				className="left-menu-icon"
				viewBox="0 0 226.777 226.777"
			>
				<path d="M182.981,112.854c-7.3-5.498-17.699-7.697-17.699-7.697s8.8-5.102,12.396-10.199  c3.6-5.099,5.399-12.999,5.7-17.098c0.299-4.101,1-21.296-12.399-31.193c-10.364-7.658-22.241-10.698-38.19-11.687V0.278h-21.396  V34.57c-4.774,0-10.353,0-16.297,0V0.278H73.702V34.57c-21.841,0-42.092,0-42.092,0v22.219c0,0,8.998,0,12.372,0  c3.373,0,9.372,0.375,11.921,3.228c2.55,2.848,3,4.349,3,9.895c0,5.548,0.001,86.435,0.001,88.535c0,2.099-0.4,4.697-2.201,6.398  c-1.798,1.701-3.597,2.098-7.898,2.098c-4.3,0-12.796,0-12.796,0l-4.399,25.698c0,0,20.918,0,42.092,0v34.195h21.395v-34.195  c6.574,0,12.298,0,16.297,0v34.195h21.396v-34.759c5.531-0.323,10.688-0.742,13.696-1.136c6.1-0.798,19.896-2.398,32.796-11.397  c12.896-9,15.793-23.098,16.094-37.294C195.68,128.053,190.274,118.353,182.981,112.854z M95.096,58.766  c0,0,6.798-0.599,13.497-0.501c6.701,0.099,12.597,0.3,21.398,3c8.797,2.701,13.992,9.3,14.196,17.099  c0.199,7.799-3.204,12.996-9.2,16.296c-5.998,3.299-14.292,5.099-22.094,5.396c-7.797,0.301-17.797,0-17.797,0V58.766z   M142.986,161.045c-4.899,2.701-14.698,5.1-24.194,5.798c-9.499,0.701-23.696,0.401-23.696,0.401v-45.893c0,0,13.598-0.698,24.197,0  c10.597,0.703,19.495,3.4,23.492,5.403c3.999,1.998,11,6.396,11,16.896C153.785,154.146,147.882,158.346,142.986,161.045z" />
			</svg>
		)
		
		const etherium_icon = (
			<svg
				fill="currentColor"
				preserveAspectRatio="xMidYMid meet"
				height="1em"
				width="1em"
				className="left-menu-icon"
				viewBox="0 0 226.777 226.777"
			>
				<g>
					<polygon points="112.553,157 112.553,86.977 44.158,116.937  "/>
					<polygon points="112.553,82.163 112.553,-0.056 46.362,111.156  "/>
					<polygon points="116.962,-0.09 116.962,82.163 184.083,111.566  "/>
					<polygon points="116.962,86.977 116.962,157.002 185.405,116.957  "/>
					<polygon points="112.553,227.406 112.553,171.085 44.618,131.31  "/>
					<polygon points="116.962,227.406 184.897,131.31 116.962,171.085  "/>
				</g>
			</svg>
		)

		return (
			<div className="dashboard">
				<LocaleProvider>
					<Layout className="main-layout">
						<Header className="header clear">
							<div className="logo">
								<a href="/" title="Crypto">
									{logo_icon}
								</a>
							</div>
							<a
								className="header-menu-item"
								href="/logout"
								onClick={() => {
									localStorage.removeItem("admin")
								}}
							>
								<FaSignOut className="header-menu-icon" />
							</a>
						</Header>
						<Layout>
							<Sider className="sider-main">
								<Menu
									className="left-menu"
									theme="light"
									mode="vertical"
									selectedKeys={[location.pathname]}
								>
									<Menu.Item key="/">
										<NavLink className="left-menu-link" to="/">
											<FaHome className="left-menu-icon" />
											<span className="nav-text left-menu-text">Home</span>
										</NavLink>
									</Menu.Item>
									<Menu.Item key="/bitcoin">
										<NavLink className="left-menu-link" to="/bitcoin">
											{bitcoin_icon}
											<span className="nav-text left-menu-text">Bitcoin</span>
										</NavLink>
									</Menu.Item>
									<Menu.Item key="/ethereum">
										<NavLink className="left-menu-link" to="/ethereum">
											{etherium_icon}
											<span className="nav-text left-menu-text">Ethereum</span>
										</NavLink>
									</Menu.Item>
								</Menu>
							</Sider>
							<Content className="content-main">
								<Switch>
									<Redirect exact from="/login" to="/" />
									{routesMap}
								</Switch>
							</Content>
						</Layout>
					</Layout>
				</LocaleProvider>
			</div>
		)
	}
}

export default withRouter(App)
