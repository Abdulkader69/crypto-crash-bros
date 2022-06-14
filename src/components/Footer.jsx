import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer text-white w-full bg-black">
        <div className="container-fluid footer-line w-full px-[15px] max-w-[90%] m-auto">
            <hr className="p-0 line" />
            <div className="row flex flex-wrap py-5">

                <div className="col basis-1/3 order-[-1] my-auto">
                    <div className="email-container p-0 text-left">
                        <span className="email-label text-[13px] italic font-semibold text-white">GET ON THE LIST</span><br />
                        <div className="d-flex email-flex">
                            <br />
                            {/* <form id="email-submit" method="post" name="mc-embedded-subscribe-form" target="_blank" className="email-form">
                                <input id="email-address" className="m-0 email-input-text" type="email" placeholder="Email Address" name="EMAIL" required="" value="" />
                                <div aria-hidden="true" style="position: absolute; left: -5000px;"><input type="text" name="b_c979ffabc41007fd79ffe121b_b785550a9e" tabindex="-1" value="" /></div>
                                <button name="subscribe" className="email-submit" type="submit">→</button>
                            </form> */}
                        </div>
                    </div>
                </div>

                <div className="col basis-1/3">
                    <img className="img-fluid footer-logo flex m-auto max-h-[200px] mt-0 h-auto max-w-full" src="https://ik.imagekit.io/bayc/assets/bayc-footer.png" alt="logo" />
                </div>

                <div className="col basis-1/3">
                    <div className="row">
                        <div className="text-lg-right col-sm-12 col-12">
                            <a href="https://www.youtube.com/channel/UCB6R9NAjkgxQi_QEkc4O25Q"><i className="fa fa-youtube-play social-icon pr-lg-0"></i></a><a href=""><i className="fa fa-instagram social-icon pr-lg-0"></i></a>
                            <a href="https://discord.gg/3P5K3dzgdB"><i className="fa fa-discord-alt social-icon pr-lg-0"></i></a><a href="https://twitter.com/BoredApeYC"><i className="fa fa-twitter social-icon pr-lg-0"></i></a>
                        </div>
                        <div className="col-lg-12 col-sm-6 col-6">
                            <p className="copyright text-right"><span className="copy-left">© 2021 Yuga Labs LLC</span></p>
                        </div>
                        <div className="col-lg-12 col-sm-6 col-6">
                            <p id="terms" className="copyright text-right">
                                <a className="link" href="#/terms">BAYC Terms &amp; Conditions</a><br />
                                <a className="link" href="#/mayc/terms">MAYC Terms &amp; Conditions</a>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="container-fluid w-full m-0 p-0">
            <span className="last-line block border-b-[15px] border-solid border-[#bfc500]"></span>
        </div>
    </footer>
  )
}
