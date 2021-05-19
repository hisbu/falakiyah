import React, { useState} from 'react';
import {Link} from 'react-router-dom'
export default function BayangQiblat () {
  return(
    <div className="container center">
      <div className="home">
        <div style={{fontSize:'30px', width:'100%', textAlign:"center"}}>Program Falakiyah</div>
        <div style={{fontSize:'40px', width:'100%', textAlign:"center"}}>PONDOK PESANTREN NURUL HUDA</div>
        <Link className="menuApps" to="/bayangqiblat">Bayang bayang Qiblat</Link>
        <Link className="menuApps" to="#">####</Link>
      </div>
      <div className="codeby">
        code by: hisbu | Kampung sawah, 20 Mei 21 
      </div>
    </div>
  )
}