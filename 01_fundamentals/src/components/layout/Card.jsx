import './Card.css'

const Card = ({ title, children, color }) => {

    const cardStyle = {
        backgroundColor: color || '#f00',
        borderColor: color || '#f00'
    }

    return (
        <div className='card' style={cardStyle}>
            <div className='title'>{title}</div>
            
            <div className='content'>
                {children}
            </div>
        </div>
    )
}

export default Card