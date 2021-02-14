import React from 'react'

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

export function Section(props) {
    const {id} = props;
    return (
        <div 
            id={id}

            className="flex flex-column center mt-20 mb-20 w-060">
                <h2 className="mb-20">{capitalize(id)}</h2>
            {props.children}
        </div>
    )
}
