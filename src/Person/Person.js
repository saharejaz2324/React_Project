import React from 'react';

const person = (props) => {
return (
    <div>
        <p onClick = {props.click}>I am {props.name} and my age is {props.age}</p>
        <p>
            {props.children}
        </p>
        
        {/* Two Way binding */}

        <input type='text' onChange = {props.changed} value = {props.name}></input>

    </div>
)
}

export default person;