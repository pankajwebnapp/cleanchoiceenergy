import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <>
            <footer className='footer bg-light pt'>
                <div className='container'>
                    <div className='row flex-md-row flex-column-reverse '>
                        <div className='col-md-6 footer-info'>
                            <h5>Questions? Give us a call</h5>
                            <Link to="tel:1-800-218-0113" >1-800-218-0113</Link>
                            <ul className='pt-4'>
                                <li>CT DOCKET NO. 13-07-26</li>
                                <li>DC PSC Order 17035</li>
                                <li>DE PSC Order 8286</li>
                                <li>IL ICC Docket No. 13-0302</li>
                                <li>MD Lic. Ref. No. IR-2843</li>
                                <li>MA PDU Lic. No. CS-103</li>
                                <li>NJ BPU Lic. No. ESL-0128</li>
                                <li>NY DPS Matter 14-02554</li>
                                <li>OH Certification No. 13-702E(1)</li>
                                <li>PA PUC Lic. No. A-2012-2308371</li>
                            </ul>
                        </div>
                        <div className='col-md-6 footer-menu'>
                            <div className='row'>
                                <div className='col-md-4 pb-md-0 pb-5'>
                                    <h6>Products</h6>
                                    <ul>
                                        <li> <Link to="clean-electricity" >Clean Electricity</Link></li>
                                    </ul>
                                </div>
                                <div className='col-md-4 pb-md-0 pb-5'>
                                    <h6>Company</h6>
                                    <ul>
                                        <li> <Link to="/about" >About</Link></li>
                                        <li> <Link to="/our-team" >Meet the Team</Link></li>
                                        <li> <Link to="#" >Our Promise</Link></li>
                                        <li> <Link to="/careers" >Careers</Link></li>
                                        <li> <Link to="#" >Support Center</Link></li>
                                        <li> <Link to="/contact" >Contact</Link></li>
                                    </ul>
                                </div>
                                <div className='col-md-4 pb-md-0 pb-5'>
                                    <h6> Resources</h6>
                                    <ul>
                                        <li> <Link to="#" >Blog</Link></li>
                                        <li> <Link to="#" >Lease Your Land</Link></li>
                                        <li> <Link to="#" >Environmental Disclosures</Link></li>
                                        <li> <Link to="#" >IL Rate Information</Link></li>
                                        <li> <Link to="#" >Press</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='logos d-flex justify-content-around align-items-center bor-top bor-bottom py-md-5 mt-5 py-4'>
                        <img src={require('../images/Best-for-the-world-environment-logo.png')} />
                        <img src={require('../images/bbb-accredited-business_2x.png')} />
                        <img src={require('../images/gold-green-america-certified-business_2x.png')} />
                        <img src={require('../images/Deloitte_Fast500_logo.png')} />
                    </div>
                    <div className='row footer-bt py-4'>
                        <div className='col-md-4 text-md-left text-center'>
                            <ul>
                                <li> <Link to="#" >© 2024 CleanChoice Energy, Inc</Link></li>
                            </ul>
                        </div>
                        <div className='col-lg-4 col-md-5 px-0 py-md-0 py-3'>
                            <ul className='d-flex justify-content-center'>
                                <li> <Link to="#" >Privacy</Link></li>
                                <li> <Link to="#" >Terms of Services</Link></li>
                                <li> <Link to="#" >Interest Based Ads</Link></li>
                            </ul>
                        </div>
                        <div className='col-lg-4 col-md-3'>
                            <ul className='d-flex justify-content-md-end justify-content-center'>
                                <li> <Link to="#" ><i class="fa fa-facebook"></i></Link></li>
                                <li> <Link to="#" ><i class="fa fa-twitter"></i></Link></li>
                                <li> <Link to="#" ><i class="fa fa-instagram"></i></Link></li>
                                <li> <Link to="#" ><i class="fa fa-linkedin"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
