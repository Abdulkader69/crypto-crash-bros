import React from 'react'

export const BuyAnApe = () => {
  return (
    <div className='fair-distribution-section'>
        <div className="max-w-[1132px] m-auto px-4 pt-12 mb-6">
            <div className="row">
                <div id="buy-an-ape" class="buy-token-container">
                    <div class="bayc-bg p-6 m-auto row bg-[#bfc500] flex flex-wrap">
                        <div class="m-auto col-lg-3 col-12">
                            <h3 class="buy-ape-title">BUY AN APE</h3>
                        </div>
                        <div class="m-auto col-lg-4 col-12 offset-lg-1">
                            <p class="common-p mb-lg-0">The initial sale has sold out. To get your Bored Ape, check out the collection on OpenSea.</p>
                        </div>
                        <div class="m-auto col-lg-3 col-12 offset-lg-1">
                            <a href="https://opensea.io/collection/boredapeyachtclub"><button class="bayc-button mint" type="button">BUY AN APE ON OPENSEA</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
