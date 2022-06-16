import React from 'react';
import Team1 from '../assets/images/1-garga.webp'
import Team2 from '../assets/images/2-gordy.webp'
import Team3 from '../assets/images/3-tomato.webp'
import Team4 from '../assets/images/4-sass.webp'

export const Team = () => {
  return (
    <div className='team-section'>
        <div className="max-w-[1132px] m-auto px-4 pt-12 mt-12 border-t border-solid border-Border">
            <div className="row flex flex-wrap">
                <div className="left w-[70%] pr-20">
                    <h2 className='mb-4 text-3xl text-white font-extrabold italic'>THE TEAM</h2>
                    <p className='mb-4 text-base text-justify text-white'> The team consists of high-quality builders in web3 and are listed below:</p>
                    <p className='mb-4 text-base text-justify text-white'>
                        <span className='text-Brand'>TheGodfather: </span>
                        <span className='italic'>Founder</span>
                    </p>
                    <p className='mb-4 text-base text-justify text-white'>
                        <span className='text-Brand'>Nefertiti: </span>
                        <span className='italic'>Community advisor</span>
                    </p>
                    <p className='mb-4 text-base text-justify text-white'>
                        <span className='text-Brand'>BlackRock: </span>
                        <span className='italic'>Chief Mod</span>
                    </p>
                    {/* <p className='mb-4 text-base text-justify text-white'>
                        <span className='text-Brand'>NO SASS. </span>
                        <span className='italic'>HERE FOR THE APES. NOT FOR THE SASS.</span>
                    </p> */}
                </div>
                <div className="right w-[30%] grid grid-cols-2 gap-5">
                    <div className="image"><img src={Team1} alt="Team1" /></div>
                    <div className="image"><img src={Team2} alt="Team2" /></div>
                    <div className="image"><img src={Team3} alt="Team3" /></div>
                    <div className="image"><img src={Team4} alt="Team4" /></div>
                </div>
            </div>
            <div className="row py-12">
                <p className='text-base uppercase text-white font-semibold text-center'>VERIFIED SMART CONTRACT ADDRESS: <a className='text-Brand underline' target="_blank" rel="noreferrer" href="https://etherscan.io/address/0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D">0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D</a></p>
            </div>
        </div>
    </div>
  )
}
