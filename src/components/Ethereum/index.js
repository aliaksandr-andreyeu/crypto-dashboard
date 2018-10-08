import React from "react"
import { Link } from "react-router-dom"

import { Row, Col, Card } from 'antd'
import { Select } from 'antd'

const Option = Select.Option

import { Chart } from "react-google-charts"

import axios from 'axios'

class Ethereum extends React.Component {
	
	onChangeEth = ( v ) => {
		this.props.handleSelectETH( v )
	}
	
	componentDidMount = async () => {
		
		if ( !this.props.ETH_data ) {
			
			const eth_url = 'https://min-api.cryptocompare.com/data/histoday?fsym=ETH&tsym=USD&limit=100'
			
			try {
				const eth_response = await axios.get( eth_url )
				
				this.props.handleSetDataETH( eth_response.data )

			} catch ( error ) {
				
				console.log( error )
			}
		}
	}		

	render = () => {
		
		const eth_data = ( this.props.ETH_data.Data ) ? this.props.getFormatData( this.props.ETH_data.Data, this.props.selectETH ) : false
		
		const options = {
			hAxis: { 
				title: 'Time', 
				//viewWindow: { min: 0, max: 15 } 
			},
			vAxis: { 
				title: this.props.selectBTC, 
				//viewWindow: { min: 0, max: 15 } 
			}
		};		
		
		return (
			<Row gutter={16}>
				<Col span={24}>
					<Card className="dash-card" title="Historical Daily Ethereum" extra={
						<Select className="dash-select" defaultValue={this.props.selectETH} onChange={this.onChangeEth}>
							<Option value="all">All</Option>
							<Option value="open">Open</Option>
							<Option value="high">High</Option>
							<Option value="low">Low</Option>
							<Option value="close">Close</Option>
						</Select>
					}>
					{ eth_data ? (					
						<div className="dash-chart">
							<Chart
								chartType="LineChart"
								options={options}
								data={eth_data}
								width="100%"
								height="600px"
								legendToggle
							/>
						</div> ) : null 
					}	
					</Card>
				</Col>
			</Row>
		)
	}
}

export default Ethereum
