import React from "react"
import { Link } from "react-router-dom"

import { Row, Col, Card } from 'antd'
import { Select } from 'antd'

const Option = Select.Option

import { Chart } from "react-google-charts"

import axios from 'axios'

class Bitcoin extends React.Component {
	
	onChangeBtc = ( v ) => {
		this.props.handleSelectBTC( v )
	}
	
	componentDidMount = async () => {

		if ( !this.props.BTC_data ) {

			const btc_url = 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=100'
			
			try {
				const btc_response = await axios.get( btc_url )
				
				console.log( btc_response.data )

				this.props.handleSetDataBTC( btc_response.data )
				
			} catch ( error ) {
				
				console.log( error )
			}
		}
	}		

	render = () => {
		
		return (
			<Row gutter={16}>
				<Col span={24}>
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

export default Bitcoin
