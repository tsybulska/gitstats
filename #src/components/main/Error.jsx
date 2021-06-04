import React from 'react'

const Error = (props) => {
    return (
        <div style={{textAlign: 'center'}}>
            <p>ERROR</p>
            <button onClick={() => props.history.push('/')} style={{marginTop: '1rem'}}>GO TO MAIN PAGE</button>
        </div>
    )
}

export default Error