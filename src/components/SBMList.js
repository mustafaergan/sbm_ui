import React from 'react'
import {connect} from 'react-redux'
import * as action from '../actions/actions'

const API_URL = 'http://jsonplaceholder.typicode.com';

class SBMList extends React.Component {

    constructor (props) {
        super(props);
    }

    componentDidMount () {
        const {allData} = this.props;
        console.log("did mount");
        console.log(this.props);
    }

    render () {

        const {SBMDataList} = this.props

        return (
            <>
                <div>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Tazminat Dosya Numarası</td>
                                    <td>Sagmer No</td>
                                    <td>Foksiyon</td>
                                    <td>Dosya Durumu</td>
                                </tr>
                                {
                                    console.log("i am here")
                                }
                                {
                                    console.log(SBMDataList)
                                    // SBMDataList.map((data,index) => {
                                    //     return (
                                    //         <SBMRow
                                    //             key={index}
                                    //             data={data}
                                    //         />
                                    //     )
                                    // })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        allData: () => {dispatch(action.asyncSetAllAction())},
    }
}

const mapStateToProps = (state) => {
    console.log("state",state);
    return {
        SBMDataList: state
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SBMList)
