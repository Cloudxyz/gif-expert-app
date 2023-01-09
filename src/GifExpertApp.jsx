import React, { useState } from 'react';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    return (
        <>
            <h1>dasd</h1>
            <ol>
                { categories.map(category => <li key={category}>{category}</li>) }
            </ol>
        </>
    )
}
