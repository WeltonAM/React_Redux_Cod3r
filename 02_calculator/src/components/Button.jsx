import './Button.css'

const Button = ({ label, operation, double, triple, click }) => {
    return (
        <button 
            onClick={() => click && click(label)}
            className={`
                button 
                ${operation ? 'operation' : ''}
                ${double ? 'double' : ''}
                ${triple ? 'triple' : ''}
            `}
        >
            {label}
        </button>
    )
}

export default Button