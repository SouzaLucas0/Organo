import './Banner.css';
import React from 'react';

interface BannerProps {
    imgPath: string,
    alt?: string
}

function Banner ({ imgPath, alt }:BannerProps) {
    return (
        <header className='banner'>
            <img
                src = {imgPath}
                alt = {alt}
            />
        </header>
    );
}

export default Banner;