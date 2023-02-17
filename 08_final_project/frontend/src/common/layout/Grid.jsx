import React from 'react'

const Grid = ({children, numbers}) => {

    
    const cols = numbers ? numbers.split(' ') : []
    
    let classes = ' '
    
    if(cols[0]) classes += `col-xs-${cols[0]} ` 
    if(cols[1]) classes += `col-sm-${cols[1]} `
    if(cols[3]) classes += `col-md-${cols[3]} `
    if(cols[4]) classes += `col-lg-${cols[4]} `
    

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default Grid