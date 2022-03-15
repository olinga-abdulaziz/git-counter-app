import React from 'react';
import { BrowserRouter as Router , Link , Route ,Routes} from 'react-router-dom';
import footer from './css/footer.module.css'
function Footer() {
    return(
      <div className={footer.footer}>
          <center><small>copyright <span>&copy;</span> 2022</small></center>
      </div>
    )
}

export default Footer