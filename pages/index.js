import {FaAngleDown} from 'react-icons/fa'
import * as Scroll from 'react-scroll';

let Link      = Scroll.Link;
let Button    = Scroll.Button;
let Element   = Scroll.Element;
let Events    = Scroll.Events;
let scroll    = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;


const Home = () => {

 
  return (
    <div className="startpage-holder">
      
            <div className="typew-holder">
                <h1 className="typew-text"> Hello, my name is <span className='name'>David.</span></h1>
                <p className="typew-subtitle">Welcome to my portfolio</p>
                <Link activeClass="active" to="info-page" spy={true} smooth={'easeInOutQuart'} duration={1000} ><FaAngleDown className='typew-subtitle icon'/> </Link>
                {//<p className="typew-subtitle"> <a href='#anchor'><FaAngleDown/> </a></p>
                }
            </div>
            <div id='anchor' className='information'>
              <Element name='info-page'>
              <div className='infoBox'>
                  <h1 className='infoHead'>About me</h1>
                  <p className='info'> Master student at Chalmers</p>
                </div>

              </Element>
            </div>
        </div>
  )
}

export default Home;