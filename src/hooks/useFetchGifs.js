import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImageS = await getGifs(category);
        setImages(newImageS);
        setIsLoading(false);
    }

    useEffect(() => {
      getImages();
    }, []);

    return {
        images: images,
        isLoading: isLoading,
    }
}
