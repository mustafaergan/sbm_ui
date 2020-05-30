import React, {Component} from 'react'

import SBMList from './SBMList'

class Dashboard extends Component {

    render () {
        return (
            <>
                <h1>Dashboard</h1>
                <SBMList history={this.props.history} />
            </>
        )
    }
}

export default Dashboard
