import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setcategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit Hecho');
        if (inputValue.trim().length > 2){
            setcategories(cats => [inputValue, ...cats]);
            setInputValue('');
        }
        
    }

    return (
        <>

            <form onSubmit = {handleSubmit}>
            {/*<h1>{inputValue}</h1>*/}
            <h2>Add Category</h2>
            <input 
                type = "text"
                value = {inputValue}
                onChange = {handleInputChange}
            />
            </form>

        </>
    )
}

AddCategory.propTypes = {
    setcategories: PropTypes.func.isRequired
}
