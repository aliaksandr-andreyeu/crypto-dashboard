import React from "react"
import { Link } from "react-router-dom"

import { Row, Col, Card } from 'antd'
import { Select } from 'antd'

const Option = Select.Option

class NothingFound extends React.Component {
	
	render = () => {
		
		return (
			<Row gutter={16}>
				<Col span={12}>
					<Card className="dash-card" title="404">
						404
					</Card>
				</Col>
			</Row>
		)
	}
}

export default NothingFound
