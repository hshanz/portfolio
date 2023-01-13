import {FaAngleDown} from 'react-icons/fa'


const Home = () => {
  return (
    <div className="startpage-holder">
            <div className="typew-holder">
                <h1 className="typew-text"> Hello, my name is <span className='name'>David.</span></h1>
                <p className="typew-subtitle">Welcome to my portfolio</p>
                <p className="typew-subtitle"> <a href='#anchor'><FaAngleDown/> </a></p>
            </div>
            <div id='anchor' className='information'>
                <div className='infoBox'>
                  <h1 className='infoHead'>About me</h1>
                  <p className='info'> Master student at Chalmers</p>
                </div>
            </div>
        </div>
  )
}

export default Home;