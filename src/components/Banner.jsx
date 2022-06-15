import React from 'react'
import BannerImage from '../assets/images/bayc-mutant-hero.jpg'

export const Banner = () => {
  return (
    
    <div className='banner-section'>
        <div className="max-w-[1132px] m-auto px-4 flex flex-wrap">
            <div class="banner-image mb-12">
                <img src={BannerImage} class="img-fluid px-0" alt="Banner" />
            </div>
        </div>
    </div>
  )
}
