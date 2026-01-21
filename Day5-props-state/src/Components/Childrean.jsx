import React from 'react'

const Childrean = ({ name, age }, children) => {
    //const {name,age} = props;

    return (
        <>
            <h2>Name : {name}</h2>
            <h2>Age : {age}</h2>
        </>
    )
}

export default Childrean
