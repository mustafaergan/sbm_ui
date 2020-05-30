import React from 'react'

export default (props) => {

    const {data} = props

    return (
        <tr>
            <td>{data.email}</td>
            {/*<td>{data.sbmSagmerNo}</td>*/}
            {/*<td>{data.operationType}</td>*/}
            {/*<td>{data.status}</td>*/}
        </tr>
    )
}
