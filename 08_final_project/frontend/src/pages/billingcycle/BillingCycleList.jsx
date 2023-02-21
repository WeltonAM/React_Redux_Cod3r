import { useEffect } from 'react'
import { connect } from 'react-redux'
import { getList } from './billingCycleActions'

const BillingCycleList = ({ list, getList }) => {

    useEffect(() => {
        getList()
    }, [])

    const renderRows = () => {
        
        const lists = list || []
        
        return lists.map((bc, i) => (
            <tr key={i}>
                <th scope="row">{++i}</th>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
            </tr>
        ))
    } 

    return (
        <div>
            <table className='table table-striped'>

                <thead className=''>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Mês</th>
                        <th scope="col">Ano</th>
                    </tr>
                </thead>

                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.billingCycle.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getList() {
            const action = getList()
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)