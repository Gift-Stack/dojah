import './styles.scss'
import Expensa from '../../assets/images/expensa.png'
import Mmbhomecare from '../../assets/images/mmbhomecare.png'
import Moneymie from '../../assets/images/moneymie.png'
import Recallo from '../../assets/images/recallo.png'
import Whogohost from '../../assets/images/whogohost.png'

const Organisations = () => {
    return (
        <div className='organizations'>
            <img src={Expensa} alt='Expensa' />
            <img src={Mmbhomecare} alt='Mmbhomecare' />
            <img src={Recallo} alt='Recallo' />
            <img src={Moneymie} alt='Moneymie' />
            <img src={Whogohost} alt='Whogohost' />
        </div>
    )
}

export default Organisations
