
import Bottom from '../Componets/Bottom';
import { BrowserRouter as Router , Link , Route ,Routes,Outlet} from 'react-router-dom';
import Footer from '../Componets/Footer';
import '../Pages/css/dashboard.css'



function EventD() {
  return (
    
    <div className='Dashcontainer'>
        <div className='dbox'>
            <div className='d1'>
              <div className='dcontent'>
                <strong>Category</strong>
                <ul>
                  <li><Link   to='/dashboard' className='badge'>All</Link></li>
                  <li><Link   to='/dashboard/fasion' className='badge'>Fasion</Link></li>
                  <li><Link   to='/dashboard/wedding' className='badge'>Wedding</Link></li>
                  <li><Link   to='/dashboard/potrait' className='badge'>Potrait</Link></li>
                  <li><Link   to='/dashboard/commercia' className='badge'>Comercia</Link></li>
                  <li><Link   to='/dashboard/corporate' className='badge'>Corporate</Link></li>
                  <li><Link   to='/dashboard/events' className='badge'>Events</Link></li>
                </ul>
              </div>
            </div>
            <div className='d2'>
            <div className='d2Title'>
                  <strong>Events</strong>
                </div>

                <ul className='d2Ul'>
                  <li>
                      <img src='https://source.unsplash.com/400x400?event' alt='' width={'100%'} height={'100%'}/>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?games' alt='' width={'100%'} height={'100%'}/>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?ball' alt='' width={'100%'} height={'100%'}/>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?basket' alt='' width={'100%'} height={'100%'}/>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?phone' alt='' width={'100%'} height={'100%'}/>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?farm' alt='' width={'100%'} height={'100%'}/>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?grass' alt='' width={'100%'} height={'100%'}/>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?police' alt='' width={'100%'} height={'100%'}/>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?bride' alt='' width={'100%'} height={'100%'}/>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?house' alt='' width={'100%'} height={'100%'}/>
                  </li>
                </ul>
            </div>
            <div className='d3'>
                
            </div>
        </div>
    </div>
    
  );
}

export default EventD;
