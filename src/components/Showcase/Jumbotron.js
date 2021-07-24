import './styles.scss'
import Heart from '../../assets/images/heart.svg'
import Headset from '../../assets/images/headset.svg'
import Favicon from '../../assets/images/favicon.svg'
import Organisations from './Organisations'

const Jumbotron = () => {
    return (
        <>
            <div className='skew'>
                <div className='content'>
                    <h3>
                        Stay focused on the business, while we handle the little
                        things
                    </h3>
                    <div className='services'>
                        <div>
                            <img src={Heart} alt='heart' />
                            <span>Great customer support</span>
                        </div>
                        <div>
                            <img src={Headset} alt='headset' />
                            <span>24/7 Support </span>
                        </div>
                    </div>
                    <div className='favicon'>
                        <img src={Favicon} alt='Favicon' />
                    </div>
                </div>
            </div>
            <Organisations />
        </>
    )
}

export default Jumbotron
