/**
 * create by nasa.wang
 */

import * as Actions from '../actions/homeActions.js'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Overview from '../views/overview.jsx'

function mapProps(state) {
    return {
        name: state.AUDIT.name
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapProps,mapDispatchToProps)(Overview)
