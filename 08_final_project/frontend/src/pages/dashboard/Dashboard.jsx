import { connect } from 'react-redux'
import { getSummary } from './dashboardActions'

import Content from '../../common/template/Content'
import ContentHeader from '../../common/template/ContentHeader'
import ValueBox from '../../common/widget/ValueBox'
import { useEffect } from 'react'

const Dashboard = ({ credit, debt, getSummary }) => {

    const formatCurrency = (number) => {
        return number.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })
    }

    useEffect(() => {
        getSummary()
    }, [])

    return (
        <div className='content-wrapper'>
            <ContentHeader title="Dashboard" small="Versão 1.0" />

            <Content>
                <ValueBox
                    numbers='12 4'
                    color='green'
                    icon='bank'
                    value={`${formatCurrency(credit)}`}
                    text='Total de créditos'
                />

                <ValueBox
                    numbers='12 4'
                    color='red'
                    icon='credit-card'
                    value={`${formatCurrency(debt)}`}
                    text='Total de dábitos'
                />

                <ValueBox
                    numbers='12 4'
                    color='blue'
                    icon='money'
                    value={`${formatCurrency(credit - debt)}`}
                    text='Valor consolidado'
                />
            </Content>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        credit: state.dashboard.summary.credit,
        debt: state.dashboard.summary.debt
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getSummary(){
            const action = getSummary()
            dispatch(action)
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)