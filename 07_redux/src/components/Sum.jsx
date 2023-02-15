import Card from './Card'
import { connect } from 'react-redux'

const Sum = ({ min, max }) => {
    return (

        <Card title="Numbers sum" blue>
            <div className="sum">
                <span>
                    <span>Result: </span>
                    <strong>{max + min}</strong>
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

export default connect(mapStateToProps)(Sum)