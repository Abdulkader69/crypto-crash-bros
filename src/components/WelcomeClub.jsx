import React from 'react';
import WC1 from '../assets/images/icon1.webp'
import WC2 from '../assets/images/icon2.webp'
import WC3 from '../assets/images/icon3.webp'
import WC4 from '../assets/images/icon4.webp'
import WC5 from '../assets/images/icon5.webp'

export const WelcomeClub = () => {
  return (
    <div className='road-map-section'>
        <div className="max-w-[1132px] m-auto px-4 pt-12 mt-12 border-t border-solid border-Border">
            <div className="row pb-5 max-w-[840px]">
                <h2 className='mb-4 text-3xl text-white font-extrabold italic'>WELCOME TO THE CLUB</h2>
                <p className='mb-4 text-base text-justify text-white'>When you buy a Bored Ape, you’re not simply buying an avatar or a provably-rare piece of art. You are gaining membership access to a club whose benefits and offerings will increase over time. Your Bored Ape can serve as your digital identity, and open digital doors for you.</p>
            </div>
            <div className="row grid grid-cols-5 gap-14">
                <div className="item">
                    <div className="icon h-44 flex items-center m-auto px-4 mb-6">
                        <img className='m-auto max-w-full h-full' src={WC1} alt="WC1" />
                    </div>
                    <p className='text-sm text-white text-center'>
                        10,000 Provably-rare Bored Ape tokens
                    </p>
                </div>
                <div className="item">
                    <div className="icon h-44 flex items-center m-auto px-4 mb-6">
                        <img className='m-auto max-w-full h-full' src={WC2} alt="WC2" />
                    </div>
                    <p className='text-sm text-white text-center'>
                        Fair Launch, fair distribution: All apes cost 0.08 ETH
                    </p>
                </div>
                <div className="item">
                    <div className="icon h-44 flex items-center m-auto px-4 mb-6">
                        <img className='m-auto max-w-full h-full' src={WC3} alt="WC3" />
                    </div>
                    <p className='text-sm text-white text-center'>
                        Ownership and commercial usage rights given to the consumer over their NFT
                    </p>
                </div>
                <div className="item">
                    <div className="icon h-44 flex items-center m-auto px-4 mb-6">
                        <img className='m-auto max-w-full h-full' src={WC4} alt="WC4" />
                    </div>
                    <p className='text-sm text-white text-center'>
                        The Bathroom: A member's-only graffiti board
                    </p>
                </div>
                <div className="item">
                    <div className="icon h-44 flex items-center m-auto px-4 mb-6">
                        <img className='m-auto max-w-full h-full' src={WC5} alt="WC5" />
                    </div>
                    <p className='text-sm text-white text-center'>
                        Gain additional benefits through roadmap activations
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
