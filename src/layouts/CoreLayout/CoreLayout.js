import React from 'react'
import Header from '../../components/Header'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

export const CoreLayout = ({ children }) => (
  <MuiThemeProvider>
    <div className={classes.mainContainer}>
      <AppBar
        title="Node-Procgen Editor"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        showMenuIconButton={false}
      />
      {children}
    </div>
  </MuiThemeProvider>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
