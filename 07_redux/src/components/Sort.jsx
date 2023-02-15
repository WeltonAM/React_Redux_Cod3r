import Card from './Card'
import { connect } from 'react-redux'

const Sort = ({ min, max }) => {
    
    const average = parseInt(Math.random() * (max - min)) + min
    
    return (

        <Card title="Sort a number" purple>
            <div className="sort">
                <span>
                    <span>Result: </span>
                    <strong>{average}</strong>
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

export default connect(mapStateToProps)(Sort)