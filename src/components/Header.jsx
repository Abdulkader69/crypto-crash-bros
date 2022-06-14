import React from 'react'

export const Header = () => {
  return (
    <nav id="nav" className="navbar bg-black px-4 lg:px-8 py-2 w-full max-w-[1200px] m-auto sticky top-0 z-[1020] flex flex-wrap md:flex-nowrap items-center justify-between md:justify-start">

        <a href="#/" id="bayc-brand" className="navbar-brand inline-block py-[5px] mr-4 whitespace-nowrap">
            <img src="https://ik.imagekit.io/bayc/assets/bayc-logo-z.png" className="inline-block align-top h-[75px] w-auto" alt="bored ape logo" height="75px" width="auto" />
        </a>

        <button aria-controls="responsive-navbar-nav" id="nav-toggle" type="button" aria-label="Toggle navigation" className="navbar-dark navbar-toggler collapsed text-white py-1 px-3">
            <span className="navbar-toggler-icon bg-[url()] block w-[30px] h-[30px] align-middle content-['']"></span>
        </button>

        <div className="navbar-collapse collapse text-white hidden md:flex basis-full grow items-center">
            <div className="navbar-nav flex flex-row justify-end w-full" id="nav-bar">
                <a id="nav-link" title="BUY AN APE" href="#/home#buy-an-ape" className="nav-link text-white text-[8px] italic font-medium tracking-[1.2px] text-end duration-[.15s] md:p-2 lg:m-[10px] hover:text-[#bfc500]">BUY AN APE</a>
                
                <a id="nav-link" title="ROADMAP" href="#/home#roadmap" className="nav-link text-white text-[8px] italic font-medium tracking-[1.2px] text-end duration-[.15s] md:p-2 lg:m-[10px] hover:text-[#bfc500]">ROADMAP</a>
                
                <a id="nav-link" title="TEAM" href="#/home#team" className="nav-link text-white text-[8px] italic font-medium tracking-[1.2px] text-end duration-[.15s] md:p-2 lg:m-[10px] hover:text-[#bfc500]">TEAM</a>
                
                <a id="nav-link" title="GALLERY" href="#/gallery" data-rb-event-key="/gallery" className="nav-link text-white text-[8px] italic font-medium tracking-[1.2px] text-end duration-[.15s] md:p-2 lg:m-[10px] hover:text-[#bfc500]">GALLERY</a>
                
                <a id="nav-link" title="PROVENANCE" href="#/provenance" data-rb-event-key="/provenance" className="nav-link text-white text-[8px] italic font-medium tracking-[1.2px] text-end duration-[.15s] md:p-2 lg:m-[10px] hover:text-[#bfc500]">PROVENANCE</a>
                
                <div className="nav-item dropdown">
                    <a aria-haspopup="true" aria-expanded="false" id="nav-dropdown" href="#" className="dropdown-toggle nav-link text-white text-[8px] italic font-medium tracking-[1.2px] text-end duration-[.15s] md:p-2 lg:m-[10px] block hover:text-[#bfc500]" role="button">MEMBERS</a>

                    
                </div>
            </div>
            <div className="navbar-nav hidden lg:flex flex-row ml-[10px] mr-5 w-max" id="nav-social">
                <a href="https://www.youtube.com/channel/UCB6R9NAjkgxQi_QEkc4O25Q"><i className="fa fa-youtube-play social-icon pr-lg-0 text-white p-5 pr-0 text-end duration-[.3s]"></i>y</a>
                <a href=""><i className="fa fa-instagram social-icon pr-lg-0 text-white p-5 pr-0 text-end duration-[.3s]"></i>i</a>
                <a href="https://discord.gg/3P5K3dzgdB"><i className="fa fa-discord-alt social-icon pr-lg-0 text-white p-5 pr-0 text-end duration-[.3s]"></i>d</a>
                <a href="https://twitter.com/BoredApeYC"><i className="fa fa-twitter social-icon pr-lg-0 text-white p-5 pr-0 text-end duration-[.3s]"></i>t</a>
            </div>
        </div>

    </nav>
  )
}
