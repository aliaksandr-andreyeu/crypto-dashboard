import React from "react"
import { Link } from "react-router-dom"

import { Row, Col, Card } from 'antd'
import { Select } from 'antd'

const Option = Select.Option

import { Chart } from "react-google-charts"

import axios from 'axios'

class Home extends React.Component {
	
	componentDidMount = async () => {

		const btc_url = 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=100'
		const eth_url = 'https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=100'
		
		try {
			const btc_response = await axios.get( btc_url )
			
			console.log( btc_response.data )

		} catch ( error ) {
			
			console.log( error )
		}
		
		try {
			const eth_response = await axios.get( eth_url )
			
			console.log( eth_response.data )

		} catch ( error ) {
			
			console.log( error )
		}
	}	

	onChangeBtc = ( v ) => {
		
		this.props.handleSelectBTC( v )
		console.log( v );
	}
	
	onChangeEth = ( v ) => {
		
		this.props.handleSelectETH( v )
		console.log( v );
	}

	render = () => {
		
	const data = [
  ["time", "open"],
  [8, 12],
  [4, 5.5],
  [11, 14],
  [4, 5],
  [3, 3.5],
  [6.5, 7]
];
 
const options = {
  hAxis: { title: "time", viewWindow: { min: 0, max: 15 } },
  vAxis: { title: "open", viewWindow: { min: 0, max: 15 } }

};		
		console.log( this.props )


		return (
			<Row gutter={16}>
				<Col span={12}>
					<Card className="dash-card" title="Historical Daily Bitcoin" extra={
						<Select className="dash-select" defaultValue={this.props.selectBTC} onChange={this.onChangeBtc}>
							<Option value="all">All</Option>
							<Option value="open">Open</Option>
							<Option value="high">High</Option>
							<Option value="low">Low</Option>
							<Option value="close">Close</Option>
						</Select>
					}>
						<Chart
							chartType="ScatterChart"
							
							options={options}
							
							data={data}
							
							width="100%"
							height="400px"
							legendToggle
						/>					
					</Card>
				</Col>
				<Col span={12}>
					<Card className="dash-card" title="Historical Daily Ethereum" extra={
						<Select className="dash-select" defaultValue={this.props.selectETH} onChange={this.onChangeEth}>
							<Option value="all">All</Option>
							<Option value="open">Open</Option>
							<Option value="high">High</Option>
							<Option value="low">Low</Option>
							<Option value="close">Close</Option>
						</Select>
					}>
						<Chart
							chartType="ScatterChart"
							data={[["Age", "Weight"], [4, 5.5], [8, 12]]}
							width="100%"
							height="400px"
							legendToggle
						/>					
					</Card>
				</Col>
			</Row>
		)
	}
}

export default Home
