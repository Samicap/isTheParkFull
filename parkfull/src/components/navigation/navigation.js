import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import './navigation.css';

export default function NavigationBar() {
  return (
    <div>
      <AppBar className="nav-bar" position="sticky">
        <Toolbar>
          Hello
        </Toolbar>
      </AppBar>
    </div>
  )
}