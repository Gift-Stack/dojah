import './style.scss'
import Favicon from '../../assets/images/favicon.svg'
import Phone from '../../assets/images/phone.svg'
import Email from '../../assets/images/email.svg'
import Twitter from '../../assets/images/twitter.svg'
import Slack from '../../assets/images/slack.svg'
import IG from '../../assets/images/ig.svg'
import FB from '../../assets/images/fb.svg'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='row g-0'>
                <div className='col-3'>
                    <h6>Company</h6>
                    <p>
                        <a href='/'>About</a>
                    </p>
                    <p>
                        <a href='/'>Pricing</a>
                    </p>
                    <p>
                        <a href='/'>Careers</a>
                    </p>
                </div>
                <div className='col-3'>
                    <h6>Legal</h6>
                    <p>
                        <a href='/'>Security</a>
                    </p>
                    <p>
                        <a href='/'>Term of service</a>
                    </p>
                    <p>
                        <a href='/'>Privacy policy</a>
                    </p>
                </div>
                <div className='col-3'>
                    <h6>Resources</h6>
                    <p>
                        <a href='/'>Blog</a>
                    </p>
                    <p>
                        <a href='/'>FAQs</a>
                    </p>
                    <p>
                        <a href='/'>Case studies</a>
                    </p>
                    <p>
                        <a href='/'>Documentation</a>
                    </p>
                </div>
                <div className='col-3'>
                    <h6>Services</h6>
                    <p>
                        <a href='/'>Messaging Services</a>
                    </p>
                    <p>
                        <a href='/'>Identity/Verification Services</a>
                    </p>
                    <p>
                        <a href='/'>Wallet Services</a>
                    </p>
                    <p>
                        <a href='/'>Financial Services</a>
                    </p>
                    <p>
                        <a href='/'>Crypto-currency Services</a>
                    </p>
                    <p>
                        <a href='/'>Bill Payment Services</a>
                    </p>
                </div>
            </div>
            <div className='contact-info'>
                <div className='contact-main'>
                    <div>
                        <img src={Favicon} alt='Favicon' />
                    </div>
                    <div>
                        <img src={Phone} alt='phone' className='small' />{' '}
                        <span>08139841310</span>
                    </div>
                    <div>
                        <img src={Email} alt='email' className='small' />
                        <span>info@dojah.io</span>
                    </div>
                    <div>
                        <img src={Twitter} alt='twitter' className='small' />
                    </div>
                    <div>
                        <img src={Slack} alt='slack' className='small' />
                    </div>
                    <div>
                        <img src={IG} alt='ig' className='small' />
                    </div>
                    <div>
                        <img src={FB} alt='fb' className='small' />
                    </div>
                </div>
                <div className='contact-others'>
                    <p>
                        (231) 352-6536, 2237 Paul Rose Rd. Frankfort,
                        Michigan(MI), 49635
                    </p>
                    <p>
                        Bibendum augue blandit urna, egestas dignissim nunc. Sit
                        sollicitudin id mollis nulla amet placerat imperdiet
                        nunc orci. Egestas suspendisse in in amet libero
                        adipiscing. Tristique semper vel tincidunt purus
                        consequat mauris. Tortor, sit amet amet, duis cras eget
                        lorem feugiat. Tempus ac sed consectetur pellentesque
                        tortor porttitor aenean viverra aenean. Porttitor
                        feugiat egestas amet viverra in quam vestibulum etiam.
                    </p>
                    <p>©2021 Dojah. All rights reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
