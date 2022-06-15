import React from 'react';

export const Specs = () => {
  return (
    <div className='team-section'>
        <div className="max-w-[1132px] m-auto px-4 pt-12 mt-12 border-t border-solid border-Border">
            <div className="row flex flex-wrap">
                <div className="left w-[70%] pr-20">
                    <h2 className='mb-4 text-3xl text-white font-extrabold italic'>THE SPECS</h2>
                    <p className='mb-4 text-base text-justify text-white'>Each Bored Ape is unique and programmatically generated from over 170 possible traits, including expression, headwear, clothing, and more. All apes are dope, but some are rarer than others.</p>
                    <p className='mb-4 text-base text-justify text-white'>The apes are stored as ERC-721 tokens on the Ethereum blockchain and hosted on IPFS. (<a href="https://boredapeyachtclub.com/#/provenance" className='text-Brand underline'>See Record and Proof.</a>) Purchasing an ape costs 0.08 ETH.</p>
                    <p className='mb-4 text-base text-justify text-white'>To access members-only areas such as <a href="https://boredapeyachtclub.com/#/bathroom" className='text-Brand underline'>THE BATHROOM</a>, Apeholders will need to be signed into their Metamask Wallet.</p>
                </div>
                <div className="right w-[30%]">
                    <div className="image"><img src="https://ik.imagekit.io/bayc/assets/mystery-ape.gif" alt="SpecsImg" /></div>
                </div>
            </div>
        </div>
    </div>
  )
}
