import React  from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { category } ) => {

    const { data:images, loading } = useFetchGifs( category );
    

    return (
        <>
            { loading && <p className="animate__animated animate__flash">Loading...</p> }
            <h3> { category } </h3>
            <div className="card-grid animate__animated animate__fadeIn">
                { images.map( ( img ) =>
                    <GifGridItem 
                        { ...img }
                        key= { img.id }
                    />
                ) }
            </div>
        </>
    )
}
