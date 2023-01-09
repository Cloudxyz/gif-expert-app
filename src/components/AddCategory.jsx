import React, { useState } from 'react';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 2) return;
        // setCategories(cats => [inputValue, ...cats]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input
                type="text"
                placeholder="Buscar gif"
                value={inputValue}
                onChange={ (e) => handleInputChange(e) }
            />
        </form>
    )
}
