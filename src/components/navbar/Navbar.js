import Logo from '../../assets/images/logo.svg'

const Navbar = () => {
    return (
        <div
            className=' d-flex justify-content-around align-items-center py-3'
            style={{ fontSize: 'small', color: '#677189' }}
        >
            <div>
                <img src={Logo} alt='Logo' width={50} />
            </div>
            <ul className='navbar-nav d-flex flex-row'>
                <li className='nav-item mx-3 text-center'>Services</li>
                <li className='nav-item mx-3 text-center'>Pricing</li>
                <li className='nav-item mx-3 text-center'>Documentation</li>
                <li className='nav-item mx-3 text-center'>Blog</li>
                <li className='nav-item mx-3 text-center'>FAQS</li>
                <li className='nav-item mx-3 text-center'>Contact</li>
            </ul>{' '}
            <div>
                <a
                    href='/'
                    className='link'
                    style={{
                        color: '#677189',
                        textDecoration: 'none',
                        marginRight: 10,
                    }}
                >
                    Login
                </a>
                <a
                    href='/'
                    className='btn text-white'
                    style={{
                        background: 'rgba(57, 119, 222, 1)',
                        fontSize: 'small',
                    }}
                >
                    Get started
                </a>
            </div>
        </div>
    )
}

export default Navbar
