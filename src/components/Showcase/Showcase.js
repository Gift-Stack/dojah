import './styles.scss'
import Macbook from '../../assets/images/macbook.svg'

// Display Images
import TopRight from '../../assets/images/top_right.png'
import MidRight from '../../assets/images/mid_right.png'
import BottomRight from '../../assets/images/bottom_right.png'
import TopLeft from '../../assets/images/top_left.png'
import MidLeft from '../../assets/images/mid_left.png'
import BottomLeft from '../../assets/images/bottom_left.png'

const Showcase = () => {
    return (
        <div className='showcase'>
            <div className='showcase-body'>
                <h1>Onboard users across Africa in seconds</h1>
                <div className='circle'></div>
                <p>
                    Seamlessly identify and verify individuals and businesses
                    via access to simple, easy-to-understand APIs
                </p>
                <div>
                    <button className='btn btn-lg'>Get started</button>
                    <button className='btn btn-lg'>Schedule a demo</button>
                </div>
                <a href='/' style={{ color: '#677189', fontSize: 'small' }}>
                    Visit our API documentation
                </a>
            </div>
            <div style={{ position: 'absolute', top: '110%' }}>
                <img src={Macbook} alt='Mackbook' width={500} />
            </div>

            {/* Sparse Image Listing */}
            <img src={TopLeft} alt='Top left' className='sparse-image tl' />
            <img src={TopRight} alt='Top right' className='sparse-image tr' />
            <img src={MidLeft} alt='Mid left' className='sparse-image ml' />
            <img src={MidRight} alt='Mid right' className='sparse-image mr' />
            <img
                src={BottomLeft}
                alt='Bottom left'
                className='sparse-image bl'
            />
            <img
                src={BottomRight}
                alt='Bottom right'
                className='sparse-image br'
            />
        </div>
    )
}

export default Showcase
