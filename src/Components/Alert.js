import React from 'react'

function Alert({ alert }) {

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <div style={{ height: '70px', width: '100vw' }}>
            {alert && <div className={`alert alert-${alert.type} alert-dismissible show" role="alert"t`}>
                <strong>{capitalize(alert.type)}</strong> {alert.msg}
            </div>}
        </div>
    )
}

export default Alert