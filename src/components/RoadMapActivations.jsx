import React from 'react';
import Shirt from '../assets/images/shirt.webp'

export const RoadMapActivations = () => {
  return (
    <div className='road-map-section'>
        <div className="max-w-[1132px] m-auto px-4 pt-12 mt-12 border-t border-solid border-Border">
            <div className="row pb-5 max-w-[840px]">
                <h2 className='mb-4 text-3xl text-white font-extrabold italic'>COMMUNITY TOOLS</h2>
                <p className='mb-4 text-base text-justify text-white'>We’re in this for the long haul.</p>
                <p className='mb-4 text-base text-justify text-white'>We’ve set up some goalposts for ourselves. Once we hit a target sell through percentage, we will begin to work on realizing the stated goal.</p>
            </div>
            <div className="row flex items-center">
                <div className="left w-[70%] pr-10">
                    <div className="item flex items-center mb-4">
                        <div className="progress w-[95px] text-base text-Brand font-semibold italic">10%</div>
                        <div className="details w-[calc(100%-95px)] line-through text-justify text-sm text-white">We pay back our moms.</div>
                    </div>
                    <div className="item flex items-center mb-4">
                        <div className="progress w-[95px] text-base text-Brand font-semibold italic">20%</div>
                        <div className="details w-[calc(100%-95px)] line-through text-justify text-sm text-white">We release the Caged Apes. 5 Caged Apes (tokens held back from the sale) are airdropped to random Apeholders.</div>
                    </div>
                    <div className="item flex items-center mb-4">
                        <div className="progress w-[95px] text-base text-Brand font-semibold italic">40%</div>
                        <div className="details w-[calc(100%-95px)] line-through text-justify text-sm text-white">BAYC gets its own YouTube channel, BAYC LoFi Radio - Beats to Ape into Shitcoins To.</div>
                    </div>
                    <div className="item flex items-center mb-4">
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
                    </div>
                </div>
                <div className="right w-[30%]">
                    <div className="w-full max-w-[80%] m-auto bg-Brand h-[250px] relative">
                        <img className='absolute -top-[8%] -left-[5%] max-w-[114%]' src={Shirt} alt="Shirt" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
