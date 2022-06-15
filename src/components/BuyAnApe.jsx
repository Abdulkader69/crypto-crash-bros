import React from 'react'

export const BuyAnApe = () => {
  return (
    <div className='fair-distribution-section'>
        <div className="max-w-[1132px] m-auto px-4 pt-12 mb-6">
            <div className="row">
                <div id="buy-an-ape" class="buy-token-container">
                    <div class="bayc-bg p-6 m-auto row bg-[#bfc500] flex flex-wrap">
                        <div class="m-auto col w-full lg:basis-1/4 lg:max-w-[25%] px-4 text-center">
                            <h3 class="buy-ape-title text-2xl text-black font-extrabold italic mb-2">BUY AN APE</h3>
                        </div>
                        <div class="m-auto col w-full lg:basis-1/3 lg:max-w-[33.333333%] px-4">
                            <p class="common-p mb-0 text-justify text-black">The initial sale has sold out. To get your Bored Ape, check out the collection on OpenSea.</p>
                        </div>
                        <div class="m-auto col w-full lg:basis-1/4 lg:max-w-[25%] px-4">
                            <a href="https://opensea.io/collection/boredapeyachtclub">
                                <button class="bayc-button mint bg-black hover:bg-white text-Brand hover:text-black rounded-lg text-center font-semibold text-base p-[5%] m-auto duration-[.3s]" type="button">BUY AN APE ON OPENSEA</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
