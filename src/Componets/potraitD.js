
import Bottom from '../Componets/Bottom';
import { BrowserRouter as Router , Link , Route ,Routes,Outlet} from 'react-router-dom';
import Footer from '../Componets/Footer';
import '../Pages/css/dashboard.css'



function PotraitD() {
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
                  <strong>Potratis</strong>
                </div>

                <ul className='d2Ul'>
                  <li>
                      <img src='https://source.unsplash.com/400x400?face' alt='' width={'100%'} height={'100%'}/>
                      <div className='dod'>
                          <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                      </div>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?node' alt='' width={'100%'} height={'100%'}/>
                      <div className='dod'>
                          <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                      </div>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?potrait' alt='' width={'100%'} height={'100%'}/>
                      <div className='dod'>
                          <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                      </div>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?blur' alt='' width={'100%'} height={'100%'}/>
                      <div className='dod'>
                          <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                      </div>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?boy' alt='' width={'100%'} height={'100%'}/>
                      <div className='dod'>
                          <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                      </div>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?passport' alt='' width={'100%'} height={'100%'}/>
                      <div className='dod'>
                          <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                      </div>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?cacke' alt='' width={'100%'} height={'100%'}/>
                      <div className='dod'>
                          <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                      </div>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?skirt' alt='' width={'100%'} height={'100%'}/>
                      <div className='dod'>
                          <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                      </div>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?forehead' alt='' width={'100%'} height={'100%'}/>
                      <div className='dod'>
                          <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                      </div>
                  </li>

                  <li>
                      <img src='https://source.unsplash.com/400x400?politics' alt='' width={'100%'} height={'100%'}/>
                      <div className='dod'>
                          <small style={{color:'yellow'}}>Download</small> <small style={{marginLeft:'30px'}}><i class="fas fa-download" style={{color:'yellow'}}></i></small>
                      </div>
                  </li>
                </ul>
            </div>
            <div className='d3'>
                
            </div>
        </div>
    </div>
    
  );
}

export default PotraitD;
