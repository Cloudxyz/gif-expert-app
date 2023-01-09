import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({category}) => {

    const { images, isLoading } = useFetchGifs(category);

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImageS = await getGifs(category);
        setImages(newImageS);
    }

    useEffect(() => {
      getImages();
    }, [])


    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((image) => <GifItem key={image.id} {...image}/>)
                }
            </div>
        </>
    )
}
