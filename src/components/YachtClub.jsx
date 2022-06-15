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
                    <h2 className='mb-4 text-3xl text-white font-extrabold italic'>WELCOME TO THE BORED APE YACHT CLUB</h2>
                    <p className='mb-4 text-base text-justify text-white'>BAYC is a collection of 10,000 Bored Ape NFTs—unique digital collectibles living on the Ethereum blockchain. Your Bored Ape doubles as your Yacht Club membership card, and grants access to members-only benefits, the first of which is access to THE BATHROOM, a collaborative graffiti board. Future areas and perks can be unlocked by the community through roadmap activation.</p>
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
