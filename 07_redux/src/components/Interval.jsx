import Card from './Card'
import './Interval.css'
import { connect } from 'react-redux'
import { alterNumberMin, alterNumberMax } from '../store/actions/numbers'

const Interval = ({ min, max, setMin, setMax }) => {
    return (
        <Card title="Numbers interval" red>
            <div className="interval">
                <span>
                    <strong>Min:</strong>
                    <input
                        type="number"
                        value={min}
                        onChange={(e) => setMin(+e.target.value)}
                    />
                </span>

                <span>
                    <strong>Max:</strong>
                    <input
                        type="number"
                        value={max}
                        onChange={(e) => setMax(+e.target.value)}
                    />
                </span>
            </div>
        </Card>

    )
}

const mapStateToProps = (state) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setMin(newNumber){
            const action = alterNumberMin(newNumber)
            dispatch(action)
        },
        setMax(newNumber){
            const action = alterNumberMax(newNumber)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Interval)