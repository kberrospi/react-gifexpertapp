import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Shooter',]);


    return (
        <>
            <h2> GifExpertApp </h2>
            <AddCategory setCategories= { setCategories } />

            <hr></hr>
            
            <ol>
                { categories.map( e  => (
                        <GifGrid 
                            key= { e }
                            category= { e }
                         />
                    ))
                }
            </ol>
        </>
    )
}

