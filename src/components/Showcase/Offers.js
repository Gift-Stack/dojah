import './styles.scss'
import ImageOne from '../../assets/images/1.png'
import ImageTwo from '../../assets/images/2.png'
import ImageThree from '../../assets/images/3.png'
import ApiLogs from '../../assets/images/api_logs.png'
import ValidateBvn from '../../assets/images/validate_bvn.png'
import ArrowRight from '../../assets/images/arrow_right.svg'
import ArrowRightAlt from '../../assets/images/arrow_right_alt.svg'
import ArrowRightWhite from '../../assets/images/arrow_right_white.svg'
import RingEllipse from '../../assets/images/ring_ellipse.svg'
import SemiRingEllipseRight from '../../assets/images/semi_ring_ellipse_right.svg'
import SemiRingEllipseLeft from '../../assets/images/semi_ring_ellipse_left.svg'

const Offers = () => {
    return (
        <div className='offers'>
            <div className='row g-0'>
                <div className='col-6 image-container'>
                    <img
                        src={ImageOne}
                        alt='Two girls smiling'
                        className='image'
                    />
                </div>
                <div className='col-6 right'>
                    <hr />
                    <h3>Know your customer</h3>
                    <p style={{ color: '#677189' }}>
                        With our various data points and biometric verification
                        techniques, you can identify and verify customers with
                        ease. Some of the data points include:
                    </p>
                    <ul style={{ color: '#677189' }}>
                        <li>Validate BVN</li>
                        <li>Lookup NIN</li>
                        <li> Lookup VIN</li>
                        <li>Lookup Phone Number</li>
                        <li> Lookup NUBAN</li>
                        <li> Liveness check</li>
                        <li>Selfie with ID verification</li>
                        <li> And so on</li>
                    </ul>

                    <img
                        src={SemiRingEllipseRight}
                        alt='SemiRingEllipseRight'
                        className='one'
                        width={30}
                    />
                </div>
                <div className='col-6 left'>
                    <hr />
                    <h3>Know your business</h3>
                    <p style={{ color: '#677189' }}>
                        You can also verify companies’ corporate information and
                        the personal information of those that manage the
                        operations of the company. This can be achieved with
                        the:
                    </p>
                    <ul style={{ color: '#677189' }}>
                        <li>Lookup CAC </li>
                        <li>Lookup TIN</li>
                        <li>Lookup NUBAN of company</li>
                    </ul>
                    <img
                        src={SemiRingEllipseLeft}
                        alt='SemiRingEllipseLeft'
                        className='two'
                        width={20}
                    />
                </div>
                <div className='col-6 image-container'>
                    <img
                        src={ImageTwo}
                        alt='Shiny day, Smiley man'
                        className='image'
                    />
                </div>
                <div className='col-6 image-container image-container-3'>
                    <img src={ImageThree} alt='Lady' className='image' />
                </div>
                <div className='col-6 right'>
                    <hr />
                    <h3>Financial Identity</h3>
                    <p style={{ color: '#677189' }}>
                        One major source of identification and verification for
                        both individuals and businesses is the bank identity.
                        With our customisable widget, you can identify the
                        customers with the following:
                    </p>
                    <p>
                        <strong>Account information</strong>
                    </p>
                    <p style={{ color: '#677189' }}>
                        You can retrieve the account information to financially
                        identify a customer. This includes the name, account
                        balance, account status (active or inactive), account
                        number, type of account (savings or current).
                    </p>
                    <p>
                        <strong>Account transactions</strong>
                    </p>
                    <p style={{ color: '#677189' }}>
                        Spending and income patterns can be gotten from this to
                        identify and understand how your customers spend and
                        earn.
                    </p>
                    <button
                        className='btn'
                        style={{
                            background: 'rgba(57, 119, 222, 1)',
                            color: 'white',
                            fontSize: 'small',
                        }}
                    >
                        Watch demo{' '}
                        <img src={ArrowRightWhite} alt='ArrowRightWhite' />
                    </button>
                    <img
                        src={RingEllipse}
                        alt='RingEllipse'
                        width={40}
                        className='three'
                    />
                </div>
            </div>

            <div
                className='d-flex'
                style={{
                    paddingTop: 80,
                    paddingLeft: 180,
                    background: 'rgba(57, 119, 222, 1)',
                    color: '#fff',
                }}
            >
                <div>
                    <h4>
                        You want to build? We are ready to build with you, we
                        are just an api call away.
                    </h4>
                    <p>
                        Dojah is faster, easier, and you are still in complete
                        control.
                    </p>
                    <p>Sign up now and get N500 credit</p>

                    <div className='d-flex mt-3'>
                        <button
                            className='btn bg-white'
                            style={{
                                color: 'rgba(57, 119, 222, 1)',
                                fontSize: 'small',
                            }}
                        >
                            Get started{' '}
                            <img src={ArrowRight} alt='Arrow right' />
                        </button>
                        <button
                            className='btn text-white mx-3'
                            style={{
                                borderColor: 'rgba(235, 241, 252, 1)',
                                fontSize: 'small',
                            }}
                        >
                            Schedule a demo
                        </button>
                    </div>
                </div>
                <div>
                    <img src={ApiLogs} alt='API Logs' width={600} />
                </div>
            </div>

            <div
                className='row g-0'
                style={{
                    paddingTop: 80,
                    background: 'rgba(27, 42, 78, 1)',
                    color: '#fff',
                }}
            >
                <div className='col-6' style={{ paddingLeft: 50 }}>
                    <img src={ValidateBvn} alt='Validate Bvn' width={600} />
                </div>
                <div className='col-6' style={{ paddingLeft: 90 }}>
                    <h4 style={{ maxWidth: '350px' }}>
                        Go through the API Documentation to properly understand
                        what Doja is, you can then schedule a demo call.
                    </h4>
                    <a
                        href='/'
                        style={{
                            fontSize: 'small',
                            textDecoration: 'none',
                            color: 'rgba(189, 210, 244, 1)',
                        }}
                    >
                        Visit our API Documentation{' '}
                        <img src={ArrowRightAlt} alt='Arrow Right Alt' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Offers
