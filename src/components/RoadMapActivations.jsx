import React from 'react';
import Shirt from '../assets/images/shirt.webp'

export const RoadMapActivations = () => {
  return (
    <div className='road-map-section' id='roadMap'>
        <div className="max-w-[1132px] m-auto px-4 pt-12 mt-12 border-t border-solid border-Border">
            <div className="row md:pb-5 max-w-[840px]">
                <h2 className='mb-4 text-2xl md:text-3xl text-white font-extrabold italic'>Mint Procedure:</h2>
                {/* <p className='mb-4 text-base text-justify text-white'>We’re in this for the long haul.</p>
                <p className='mb-4 text-base text-justify text-white'>We’ve set up some goalposts for ourselves. Once we hit a target sell through percentage, we will begin to work on realizing the stated goal.</p> */}
            </div>
            <div className="row flex flex-wrap items-start">
                <div className="left w-full md:w-[70%] md:pr-10">
                    <div className="item flex items-center mb-4">
                        <div className="progress w-[95px] text-sm md:text-base text-Brand font-semibold italic">Phase 1: </div>
                        <div className="details w-[calc(100%-95px)] line-through text-justify text-sm text-white">(50 NFTs): Free Mint (Whitelist wallets will be provided) 1 per tx/ 2 per wallet. Duration: until sellout</div>
                    </div>
                    <div className="item flex items-center mb-4">
                        <div className="progress w-[95px] text-sm md:text-base text-Brand font-semibold italic">Phase 2: </div>
                        <div className="details w-[calc(100%-95px)] line-through text-justify text-sm text-white">(1000 NFTs): 0.02 ETH Paid Mint (Whitelist wallets will be provided) 5 per tx / 10 per wallet: until sell out</div>
                    </div>
                    <div className="item flex items-center mb-4">
                        <div className="progress w-[95px] text-sm md:text-base text-Brand font-semibold italic">Phase 3:</div>
                        <div className="details w-[calc(100%-95px)] line-through text-justify text-sm text-white">(1000 NFTs) 0.03 Public (Everyone can mint) 10 per tx / 15 per wallet</div>
                    </div>
                    {/* <div className="item flex items-center mb-4">
                        <div className="progress w-[95px] text-base text-Brand font-semibold italic">60%</div>
                        <div className="details w-[calc(100%-95px)] line-through text-justify text-sm text-white">Member-Exclusive BAYC Merch Store gets unlocked, featuring Limited Edition tees, hoodies, and other goodies.</div>
                    </div>
                    <div className="item flex items-center mb-4">
                        <div className="progress w-[95px] text-base text-Brand font-semibold italic">80%</div>
                        <div className="details w-[calc(100%-95px)] line-through text-justify text-sm text-white">The clubhouse image becomes interactive and the Mysterious Note becomes legible, beginning a treasure hunt. The first to solve the mystery will be rewarded 5 ETH and a Bored Ape.</div>
                    </div>
                    <div className="item flex items-center mb-4">
                        <div className="progress w-[95px] text-base text-Brand font-semibold italic">90%</div>
                        <div className="details w-[calc(100%-95px)] line-through text-justify text-sm text-white">The Bored Ape liquidity pool is initiated.</div>
                    </div>
                    <div className="item flex items-center mb-4">
                        <div className="progress w-[95px] text-base text-Brand font-semibold italic">100%</div>
                        <div className="details w-[calc(100%-95px)] line-through text-justify text-sm text-white">The Mutant Ape (NFT Breeding) Arcade Machine gets ﬁxed. And we cook up new ways to ape with our friends.</div>
                    </div> */}
                </div>
                <div className="right w-full md:w-[30%] mt-5 md:mt-0">
                    <div className="w-full max-w-[250px] m-auto bg-Brand h-[250px] relative">
                        <img className='absolute -top-[8%] -left-[5%] max-w-[114%] h-[300px]' src={Shirt} alt="Shirt" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
