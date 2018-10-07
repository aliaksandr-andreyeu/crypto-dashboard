import React from "react"
import { Link } from "react-router-dom"

import { Row, Col, Card } from 'antd'

import { Chart } from "react-google-charts"

import axios from 'axios'

class Bitcoin extends React.Component {
	
	componentDidMount = async () => {

		const btc_url = 'https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=100'
		
		try {
			const btc_response = await axios.get( btc_url )
			
			console.log( btc_response.data )

		} catch ( error ) {
			
			console.log( error )
		}
		
	}	
	

	render = () => {
		
		return (
			<Row gutter={16}>
				<Col span={24}>
					<Card className="dash-card" title="Historical Daily Bitcoin">
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
