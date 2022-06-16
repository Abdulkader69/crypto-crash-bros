import React from 'react';

export const Specs = () => {
  return (
    <div className='team-section'>
        <div className="max-w-[1132px] m-auto px-4 pt-12 mt-12 border-t border-solid border-Border">
            <div className="row flex flex-wrap">
                <div className="left w-full md:w-[70%] md:pr-20">
                    <h2 className='mb-4 text-2xl md:text-3xl text-white font-extrabold italic'>The Art and the Money!</h2>
                    <p className='mb-4 text-sm md:text-base text-justify text-white'>Crypto Crash Bros collection is built from hand-drawn art with 60 traits that form the entire 2,222 arts in the collection. Aside from the beauty of the art, each holder will be rewarded with $100 for Minting a Crypto Crash Bro if they do not list it below 1 Eth or dump it before a week after mint. This will guarantee the project has a high floor price as well as a promising future beyond flipping. </p>
                </div>
                <div className="right w-full md:w-[30%]">
                    <div className="image"><img src="https://ik.imagekit.io/bayc/assets/mystery-ape.gif" alt="SpecsImg" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}
