import React from 'react'

export const CommunityTools = () => {
  return (
    <div className='community-tools-section'>
        <div className="max-w-[1132px] m-auto px-4 pt-12 mt-12 border-t border-solid border-Border">
            <div className="row flex flex-wrap">
                <div className="left w-[70%] pr-20">
                    <h2 className='mb-4 text-3xl text-white font-extrabold italic'>COMMUNITY TOOLS</h2>
                    <p className='mb-4 text-base text-justify text-white'>Here are some helpful tools created by the Bored Ape Yacht Club community. Please note that these are unofficial in nature. Every assignment of an ape's overall value or rarity is inherently subjective.</p>
                </div>
                <div className="right w-[30%]">
                    <a className='mb-4 w-full max-w-[250px] m-auto h-[50px] font-bold flex items-center justify-center text-black text-base uppercase rounded-lg bg-Brand transition ease-in hover:bg-white' href="https://nftexp.io/explore/bored-ape-yacht-club">NFTEXP.IO</a>
                    <a className='w-full max-w-[250px] m-auto h-[50px] font-bold flex items-center justify-center text-black text-base uppercase rounded-lg bg-Brand transition ease-in hover:bg-white' href="https://rarity.tools/boredapeyachtclub">RARITY.TOOLS</a>
                </div>
            </div>
        </div>
    </div>
  )
}
