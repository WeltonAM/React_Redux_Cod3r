import React from 'react'

const IconButton = ({ hide, style, action, icon }) => {
    if (hide) {
        return null
    } else {
        return (
            <button 
                className={`btn btn-${style}`}
                onClick={action}
            >
                <i className={`fa fa-${icon}`}></i>
            </button>
        )
    }

}

export default IconButton