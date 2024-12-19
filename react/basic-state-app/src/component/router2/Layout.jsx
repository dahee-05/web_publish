import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from './Header.jsx';
import Airbnb from '../airbnb/AppAirbnb.jsx';
import Aladin from '../aladin/AppAladin.jsx';
import Avatar from '../avatar/AppAvatar.jsx';
import Counter from '../counter/AppCounter.jsx';
import Olive from '../olive/AppOlive.jsx';
import Yes24 from '../yes24/AppBestSeller.jsx';

export default function Layout() {
  return (
    <div>
      <Header>
        <Link to='' style={{'padding':'20px'}}>Home</Link>  
        <Link to='airbnb' style={{'padding':'10px'}}>Airbnb</Link>  
        <Link to='aladin' style={{'padding':'10px'}}>Aladin</Link>
        <Link to='avatar' style={{'padding':'10px'}}>Avatar</Link>
        <Link to='counter' style={{'padding':'10px'}}>Counter</Link>
        <Link to='olive' style={{'padding':'10px'}}>Olive</Link>
        <Link to='yes24' style={{'padding':'10px'}}>yes24</Link>
      </Header>
      <Outlet />
      {/* <Footer>
         <div style={{'':''}}>Footer</div> 
      </Footer> */}
    </div>
  );
}

