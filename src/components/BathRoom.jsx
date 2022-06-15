import React from 'react';
import Toilet from '../assets/images/toilet.png'

export const BathRoom = () => {
  return (
    <div className='bathRoom-section'>
        <div className="max-w-[1132px] m-auto px-4 pt-12 mt-12 border-t border-solid border-Border">
            <div className="row flex flex-wrap">
                <div className="left w-[80%] pr-20">
                    <h2 className='mb-4 text-3xl text-white font-extrabold italic'>THE BATHROOM</h2>
                    <p className='mb-4 text-base text-justify text-white'>The BAYC Bathroom will become operational once the presale period is over. It contains a canvas accessible only to wallets containing at least one ape. Like any good dive bar bathroom, this is the place to draw, scrawl, or write expletives.</p>
                    <p className='mb-4 text-base text-justify text-white'>Each ape-holder will be able to paint a pixel on the bathroom wall every fifteen minutes. Think of it as a collaborative art experiment for the cryptosphere. A members-only canvas for the discerning minds of crypto twitter.</p>
                    <p className='mb-4 text-base text-justify text-white'>We're pretty sure it's going to be full of dicks.</p>
                </div>
                <div className="right w-[20%]">
                    <img className='max-w-[90%] m-auto' src={Toilet} alt="Toilet" />
                </div>
            </div>
        </div>
    </div>
  )
}
