import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {hide} from 'modules/modals/actions'

const components = {}

export const ModalsContainer = ({type, hide, args}) => {
    if (!type) {
        return null
    }

    if (!components[type]) {
        throw new Error(`Unknown modal type ${type}`)
    }

    const Component = components[type]
    return <Component {...args} hide={hide}/>
}

export default connect(
    ({modals}) => ({...modals}),
    (dispatch) => bindActionCreators({hide}, dispatch)
)(ModalsContainer)
