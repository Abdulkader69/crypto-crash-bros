import React from 'react';
import { Link } from 'react-router-dom';

export const Welcome = () => {
  return (
    <div className="text-white">
        <div className="transition-[opacity,transform] duration-[.0s] ease-in transform-none opacity-100">
            <div className="common-container w-full max-w-[1200px] m-auto">
                <div className="container w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]">
                    <div className="row flex flex-wrap mr-[-15px] ml-[-15px] mb-12 lg:mb-0">
                        <div className="col w-[calc(100%-118px)] md:w-[calc(100%-210px)]">
                            <img className="mobile-width img-fluid relative mb-[-37px] z-[1] block pt-6 mx-auto" src="https://ik.imagekit.io/bayc/assets/bayc-logo.png" alt="bayc header logo" width="300px" height="300px" />
                        </div>
                        <div className="manu-wrap col max-w-xs flex justify-end mt-6 mb-[-15px] px-[15px]">
                            <div className="menu flex items-center mr-0 md:mr-5">
                                <Link to="" className='mr-4'>FAQ</Link>
                                <Link to="/mint">Mint</Link>
                            </div>
                            {/* <a href="https://www.youtube.com/channel/UCB6R9NAjkgxQi_QEkc4O25Q">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 310 310" className='w-[16px] m-5 mr-0 text-end duration-[.3s] fill-white hover:fill-[#bfc500]'>
                                    <g id="XMLID_822_">
                                      <path id="XMLID_823_" d="M297.917,64.645c-11.19-13.302-31.85-18.728-71.306-18.728H83.386c-40.359,0-61.369,5.776-72.517,19.938
                                        C0,79.663,0,100.008,0,128.166v53.669c0,54.551,12.896,82.248,83.386,82.248h143.226c34.216,0,53.176-4.788,65.442-16.527
                                        C304.633,235.518,310,215.863,310,181.835v-53.669C310,98.471,309.159,78.006,297.917,64.645z M199.021,162.41l-65.038,33.991
                                        c-1.454,0.76-3.044,1.137-4.632,1.137c-1.798,0-3.592-0.484-5.181-1.446c-2.992-1.813-4.819-5.056-4.819-8.554v-67.764
                                        c0-3.492,1.822-6.732,4.808-8.546c2.987-1.814,6.702-1.938,9.801-0.328l65.038,33.772c3.309,1.718,5.387,5.134,5.392,8.861
                                        C204.394,157.263,202.325,160.684,199.021,162.41z"/>
                                    </g>
                                </svg>
                            </a>
                            <a href="/">
                                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className='w-[16px] m-5 mr-0 text-end duration-[.3s]'>
                                    <path className="fill-white hover:fill-[#bfc500]"  d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"/>
                                </svg>
                            </a> */}
                            <a className='hidden md:block' href="https://discord.gg/3P5K3dzgdB">
                              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-[16px] m-5 mr-0 text-end duration-[.3s] fill-white hover:fill-[#bfc500]'>
                                  <path d="M18.942 5.556a16.299 16.299 0 0 0-4.126-1.297c-.178.321-.385.754-.529 1.097a15.175 15.175 0 0 0-4.573 0 11.583 11.583 0 0 0-.535-1.097 16.274 16.274 0 0 0-4.129 1.3c-2.611 3.946-3.319 7.794-2.965 11.587a16.494 16.494 0 0 0 5.061 2.593 12.65 12.65 0 0 0 1.084-1.785 10.689 10.689 0 0 1-1.707-.831c.143-.106.283-.217.418-.331 3.291 1.539 6.866 1.539 10.118 0 .137.114.277.225.418.331-.541.326-1.114.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595c.415-4.396-.709-8.209-2.973-11.589zM8.678 14.813c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c.001 1.123-.793 2.045-1.798 2.045zm6.644 0c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c0 1.123-.793 2.045-1.798 2.045z"/>
                              </svg>
                            </a>
                            <a className='hidden md:block' href="https://twitter.com/BoredApeYC">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                viewBox="0 0 310 310" className='w-[16px] m-5 mr-0 text-end duration-[.3s] fill-white hover:fill-[#bfc500]'>
                                  <g id="XMLID_826_">
                                      <path id="XMLID_827_" d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73
                                      c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783
                                      c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598
                                      C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467
                                      c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977
                                      c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889
                                      c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597
                                      c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961
                                      c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895
                                      c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367
                                      c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998
                                      C307.394,57.037,305.009,56.486,302.973,57.388z"/>
                                  </g>
                              </svg>
                            </a>
                        </div>
                        <div className="col px-0 basis-full max-w-full">
                            <div className="container w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mb-6 lg:mb-[50px]">
                                <div className="row flex flex-wrap mx-[-15px]">
                                    <div className="col px-0 basis-full max-w-full">
                                        <video className="mx-auto w-full" autoPlay loop id="myVideo">
                                            <source src="https://ik.imagekit.io/bayc/assets/club-landing.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col basis-full max-w-full lg:basis-[40%] lg:max-w-[40%]">
                            <div className="row welcome bg-black lg:mt-[-331px] xl:mt-[-265px] flex flex-wrap lg:pt-6 relative">
                                <div className="border-bottom basis-3/4 max-w-[75%] border-b-[1px] border-solid border-[#dee2e6] px-0 ml-4 lg:ml-0">
                                    <h1 className="common-title uppercase mb-4 sticky text-[27.2px] font-extrabold italic leading-[2.041rem]">
                                        WELCOME TO<br />
                                        Crypto Crash Bros<br />
                                        NFT Collection(CCB).
                                    </h1>
                                    <Link to="/home" className="bayc-button flex items-center justify-center mb-6 w-full bg-[#bfc500] hover:bg-white rounded-lg text-black border-0 font-bold text-base p-[5%] m-auto duration-[.3s]" type="button">ENTER</Link>
                                </div>
                                <div className="scroll m-auto pr-0 col basis-1/6 relative">
                                    <div className="rotate my-auto absolute translate-x-[-50%] translate-y-[-50%] rotate-[-90deg] w-max top-2/4 left-2/4 text-[11.2px] font-medium italic text-white opacity-25 animate-pulse duration-[1.3s] tracking-wider leading-[.6em]">← SCROLL DOWN</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row flex flex-wrap mr-[-15px] ml-[-15px] mb-12 pb-[70px] lg:pb-0">
                        <div className="col max-w-[760px] px-4">
                            <p className="common-p">A limited NFT collection where the token itself doubles as your membership to a swamp club for apes. The club is open! Ape in with us.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
