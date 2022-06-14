import React from 'react'

export const Header = () => {
  return (
    <nav id="nav" class="navbar bg-black px-4 lg:px-8 py-2 w-full max-w-[1200px] m-auto sticky top-0 z-[1020] flex flex-wrap md:flex-nowrap items-center justify-between md:justify-start">

        <a href="#/" id="bayc-brand" class="navbar-brand inline-block py-[5px] mr-4 whitespace-nowrap">
            <img src="https://ik.imagekit.io/bayc/assets/bayc-logo-z.png" class="inline-block align-top h-[75px] w-auto" alt="bored ape logo" height="75px" width="auto" />
        </a>

        <button aria-controls="responsive-navbar-nav" id="nav-toggle" type="button" aria-label="Toggle navigation" class="navbar-dark navbar-toggler collapsed">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="navbar-collapse collapse text-white">
            <div class="navbar-nav" id="nav-bar">
                <a id="nav-link" title="BUY AN APE" href="#/home#buy-an-ape" class="nav-link">BUY AN APE</a><a id="nav-link" title="ROADMAP" href="#/home#roadmap" class="nav-link">ROADMAP</a>
                <a id="nav-link" title="TEAM" href="#/home#team" class="nav-link">TEAM</a><a id="nav-link" title="GALLERY" href="#/gallery" data-rb-event-key="/gallery" class="nav-link">GALLERY</a>
                <a id="nav-link" title="PROVENANCE" href="#/provenance" data-rb-event-key="/provenance" class="nav-link">PROVENANCE</a>
                <div class="nav-item dropdown"><a aria-haspopup="true" aria-expanded="false" id="nav-dropdown" href="#" class="dropdown-toggle nav-link" role="button">MEMBERS</a></div>
            </div>
            <div class="navbar-nav" id="nav-social">
                <a href="https://www.youtube.com/channel/UCB6R9NAjkgxQi_QEkc4O25Q"><i class="fa fa-youtube-play social-icon pr-lg-0"></i></a><a href=""><i class="fa fa-instagram social-icon pr-lg-0"></i></a>
                <a href="https://discord.gg/3P5K3dzgdB"><i class="fa fa-discord-alt social-icon pr-lg-0"></i></a><a href="https://twitter.com/BoredApeYC"><i class="fa fa-twitter social-icon pr-lg-0"></i></a>
            </div>
        </div>

    </nav>
  )
}
