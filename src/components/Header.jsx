import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <nav id="nav" className="navbar bg-black px-4 lg:px-8 py-2 w-full max-w-[1200px] m-auto sticky top-0 z-[1020] flex flex-wrap md:flex-nowrap items-center justify-between md:justify-start">

        <Link to="/" id="bayc-brand" className="navbar-brand inline-block py-[5px] mr-4 whitespace-nowrap cursor-pointer">
            <img src="https://ik.imagekit.io/bayc/assets/bayc-logo-z.png" className="inline-block align-top h-[50px] md:h-[75px] w-auto cursor-pointer" alt="bored ape logo" height="75px" width="auto" />
        </Link>

        <div className="navbar-collapse collapse text-white hidden md:flex basis-full grow items-center">
            <div className="navbar-nav flex flex-row justify-end w-full" id="nav-bar">
                <ScrollLink to="ape" spy={true} smooth={true} offset={-80} duration={500} title="BUY AN APE" className="nav-link cursor-pointer text-white text-[8px] italic font-medium tracking-[1.2px] text-end duration-[.15s] md:p-2 lg:m-[10px] hover:text-[#bfc500]">BUY AN APE</ScrollLink>
                
                <ScrollLink to="roadMap" spy={true} smooth={true} offset={-80} duration={500} title="ROADMAP" className="nav-link cursor-pointer text-white text-[8px] italic font-medium tracking-[1.2px] text-end duration-[.15s] md:p-2 lg:m-[10px] hover:text-[#bfc500]">ROADMAP</ScrollLink>
                
                <ScrollLink to="team" spy={true} smooth={true} offset={-80} duration={500} className="nav-link cursor-pointer text-white text-[8px] italic font-medium tracking-[1.2px] text-end duration-[.15s] md:p-2 lg:m-[10px] hover:text-[#bfc500]">TEAM</ScrollLink>
                
                <a title="GALLERY" href="/home" data-rb-event-key="/gallery" className="nav-link cursor-pointer text-white text-[8px] italic font-medium tracking-[1.2px] text-end duration-[.15s] md:p-2 lg:m-[10px] hover:text-[#bfc500]">GALLERY</a>
                
                <a title="PROVENANCE" href="/home" data-rb-event-key="/provenance" className="nav-link cursor-pointer text-white text-[8px] italic font-medium tracking-[1.2px] text-end duration-[.15s] md:p-2 lg:m-[10px] hover:text-[#bfc500]">PROVENANCE</a>
                
                <a href="/home" className="dropdown-toggle nav-link cursor-pointer text-white text-[8px] italic font-medium tracking-[1.2px] text-end duration-[.15s] md:p-2 lg:m-[10px] block hover:text-[#bfc500]" role="button">MEMBERS</a>
            </div>
            <div className="navbar-nav hidden lg:flex flex-row ml-[10px] mr-5 w-max" id="nav-social">
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
                </a> */}
                {/* <a href="">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" className='w-[16px] m-5 mr-0 text-end duration-[.3s]'>
                        <path className='fill-white hover:fill-[#bfc500]' d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z"/>
                    </svg>
                </a> */}
                <a href="https://discord.gg/TBA" target="_black" rel="noreferrer">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className='w-[16px] m-5 mr-0 text-end duration-[.3s] fill-white hover:fill-[#bfc500]'>
                        <path d="M18.942 5.556a16.299 16.299 0 0 0-4.126-1.297c-.178.321-.385.754-.529 1.097a15.175 15.175 0 0 0-4.573 0 11.583 11.583 0 0 0-.535-1.097 16.274 16.274 0 0 0-4.129 1.3c-2.611 3.946-3.319 7.794-2.965 11.587a16.494 16.494 0 0 0 5.061 2.593 12.65 12.65 0 0 0 1.084-1.785 10.689 10.689 0 0 1-1.707-.831c.143-.106.283-.217.418-.331 3.291 1.539 6.866 1.539 10.118 0 .137.114.277.225.418.331-.541.326-1.114.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595c.415-4.396-.709-8.209-2.973-11.589zM8.678 14.813c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c.001 1.123-.793 2.045-1.798 2.045zm6.644 0c-.988 0-1.798-.922-1.798-2.045s.793-2.047 1.798-2.047 1.815.922 1.798 2.047c0 1.123-.793 2.045-1.798 2.045z"/>
                    </svg>
                </a>
                <a href="Twitter.com/CryptoCrashBros" target="_black" rel="noreferrer">
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
        </div>
        <div className="navigator block md:hidden">
            <button type='button' className='p-2 relative' onClick={() => setShowMenu((prevMode) => !prevMode)}>
                <span className={`w-5 h-[2px] bg-white block relative transition ease-in mb-1 ${showMenu ? 'rotate-45 top-[6px]' : 'rotate-0'}`} />
                <span className={`w-5 h-[2px] bg-white block relative transition ease-in mb-1 ${showMenu ? '-rotate-45' : 'rotate-0'}`} />
                <span className={`w-5 h-[2px] bg-white block relative transition ease-in ${showMenu ? 'opacity-0' : 'opacity-100'}`} />
            </button>
        </div>
    </nav>
    <div className={`mobile-menu-items opacity-100 md:opacity-0 fixed w-full h-[calc(100%-64px)] top-[64px] px-4 bg-[rgba(35,35,35)] ${showMenu ? 'right-0' : '-right-full'}`}>
        <ul className='block mt-10'>
            <li className='my-4'><ScrollLink onClick={() => setShowMenu((prevMode) => !prevMode)} className="cursor-pointer py-2 text-lg text-white" to="ape" spy={true} smooth={true} duration={500}>BUY AN APE</ScrollLink></li>
            <li className='my-4'><ScrollLink onClick={() => setShowMenu((prevMode) => !prevMode)} className="cursor-pointer py-2 text-lg text-white" to="roadMap" spy={true} smooth={true} duration={500}>ROADMAP</ScrollLink></li>
            <li className='my-4'><ScrollLink onClick={() => setShowMenu((prevMode) => !prevMode)} className="cursor-pointer py-2 text-lg text-white" to="team" spy={true} smooth={true} duration={500}>TEAM</ScrollLink></li>
            <li className='my-4'><a href='/home' onClick={() => setShowMenu((prevMode) => !prevMode)} className="cursor-pointer py-2 text-lg text-white">GALLERY</a></li>
            <li className='my-4'><a href='/home' onClick={() => setShowMenu((prevMode) => !prevMode)} className="cursor-pointer py-2 text-lg text-white">PROVENANCE</a></li>
            <li className='my-4'><a href='/home' onClick={() => setShowMenu((prevMode) => !prevMode)} className="cursor-pointer py-2 text-lg text-white">MEMBERS</a></li>
        </ul>
    </div>
    </>
  )
}
