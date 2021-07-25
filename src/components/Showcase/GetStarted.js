import SmileyGuy from '../../assets/images/boy_smiling.png'
import ArrowRight from '../../assets/images/arrow_right.svg'

const GetStarted = () => {
    return (
        <div
            style={{
                background: `linear-gradient(90.51deg, #3977DE 45.24%, rgba(57, 119, 222, 0) 97.6%
        ),
        url(${SmileyGuy})`,
                backgroundBlendMode: 'multiply',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '400px',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    height: '100%',
                    padding: '30px 10%',
                }}
            >
                <h3 style={{ color: '#fff', width: '43%' }}>
                    You want to build? We are ready to build with you, we are
                    just an api call away.
                </h3>
                <div className='d-flex mt-3'>
                    <button
                        className='btn bg-white'
                        style={{
                            color: 'rgba(57, 119, 222, 1)',
                            fontSize: 'small',
                        }}
                    >
                        Get started <img src={ArrowRight} alt='Arrow right' />
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
        </div>
    )
}

export default GetStarted
