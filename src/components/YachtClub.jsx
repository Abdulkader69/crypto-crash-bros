import React from 'react';
import Ape1 from '../assets/images/ape1.png'
import Ape2 from '../assets/images/ape2.png'
import Ape3 from '../assets/images/ape3.png'
import Ape4 from '../assets/images/ape4.png'

export const YachtClub = () => {
  return (
    <div className='yachtclub-section'>
        <div className="max-w-[1132px] m-auto px-4 pt-12 mt-12 border-t border-solid border-Border mb-6">
            <div className="row flex flex-wrap">
                <div className="left w-[70%] pr-20">
                    <h2 className='mb-4 text-3xl text-white font-extrabold italic'>Welcome to Crypto Crash Bros NFT Collection(CCB).</h2>
                    <p className='mb-4 text-base text-justify text-white'>Crypto Crash Bros is a collection of 2,222 Crypto Bros who have determined not to let the market downturn affect them but have determined to keep showing up, being a degen and aping into good quality projects for a chance to hit the moon, even in the most unpromising market situation!</p>
                    <p className='mb-4 text-base text-justify text-white'></p>
                    <p className='mb-4 text-base text-justify text-white'></p>
                </div>
                <div className="right w-[30%] grid grid-cols-2 gap-5">
                    <div className="image"><img src={Ape1} alt="Team1" /></div>
                    <div className="image"><img src={Ape2} alt="Team2" /></div>
                    <div className="image"><img src={Ape3} alt="Team3" /></div>
                    <div className="image"><img src={Ape4} alt="Team4" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}
