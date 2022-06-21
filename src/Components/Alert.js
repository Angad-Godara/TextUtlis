import React from 'react'

function Alert({ alert }) {

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        alert && <div className={`alert alert-${alert.type} alert-dismissible show" role="alert"t`}>
            <strong>{capitalize(alert.type)}</strong> {alert.msg}
        </div>
    )
}

export default Alert