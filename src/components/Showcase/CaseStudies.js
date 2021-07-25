import VR from '../../assets/images/vr.png'
import RedLaptop from '../../assets/images/red_laptop.png'
import Cyborg from '../../assets/images/cyborg.png'
import DigitalWorld from '../../assets/images/digital_world.png'

const CaseStudies = () => {
    return (
        <div style={{ padding: '3em 8em' }}>
            <div className='row gx-3'>
                <div className='col-3'>
                    <div className='row gy-1'>
                        <div className='col-12'>
                            <h5>Read our case studies</h5>
                            <p style={{ fontSize: '10px' }}>
                                Find out about exciting products that have been
                                built and that you can build with Dojah!
                            </p>
                        </div>
                        <div className='col-12' style={{ maxWidth: '100%' }}>
                            <img
                                src={VR}
                                alt='A boy wear VR glasses'
                                width='100%'
                            />
                        </div>
                    </div>
                </div>
                <div className='col-9'>
                    <div className='row gy-3'>
                        <div
                            className='col-12'
                            style={{ maxHeight: '250px', maxWidth: '100%' }}
                        >
                            <img
                                src={RedLaptop}
                                alt='Red laptop'
                                height='100%'
                                width='100%'
                                style={{
                                    objectFit: 'cover',
                                    objectPosition: 'center',
                                }}
                            />
                        </div>
                        <div className='col-12'>
                            <div className='row gx-2'>
                                <div
                                    className='col-6'
                                    style={{
                                        maxHeight: '250px',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <img
                                        src={Cyborg}
                                        alt='Cyborg'
                                        height='100%'
                                        width='100%'
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                        }}
                                    />
                                </div>
                                <div
                                    className='col-6'
                                    style={{
                                        maxHeight: '250px',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <img
                                        src={DigitalWorld}
                                        alt='Digital world'
                                        height='100%'
                                        width='100%'
                                        style={{
                                            objectFit: 'cover',
                                            objectPosition: 'center',
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaseStudies
