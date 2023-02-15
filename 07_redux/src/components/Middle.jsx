import Card from './Card'
import { connect } from 'react-redux'

const Middle = ({min, max}) => {
    return (

        <Card title="Numbers average" green>
            <div className="middle">
                <span>
                    <span>Result: </span>
                    <strong>{(max + min) / 2}</strong>
                </span>
            </div>
        </Card>

    )
}

const mapStateToProps = (state) => {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    }
}

export default connect(mapStateToProps)(Middle)