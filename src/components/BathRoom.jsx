import React from 'react';
import Toilet from '../assets/images/toilet.png'

export const BathRoom = () => {
  return (
    <div className='bathRoom-section'>
        <div className="max-w-[1132px] m-auto px-4 pt-12 mt-12 border-t border-solid border-Border">
            <div className="row flex flex-wrap">
                <div className="left w-full md:w-[80%] md:pr-20">
                    <h2 className='mb-4 text-2xl md:text-3xl text-white font-extrabold italic'>Membership</h2>
                    <p className='mb-4 text-sm md:text-base text-justify text-white'>Crypto Crash Bros will unlock access to private membership, alphas, and upcoming future drops. Once the Crypto Crash Bros launches, the team will hit the ground running to create a second collection that will be given out to V1 holders for free. This will be followed by an erc20 token. All of these benefits and more will be unlocked through Crypto Crash Bros membership.</p>
                    <p className='mb-4 text-sm md:text-base text-justify text-white'>You can join our discord to discuss with us and learn more about our plans.</p>
                </div>
                <div className="right w-full md:w-[20%] mt-5 md:mt-0">
                    <img className='max-w-[90%] m-auto' src={Toilet} alt="Toilet" />
                </div>
            </div>
        </div>
    </div>
  )
}
