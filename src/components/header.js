import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {AppBar,Toolbar,Typography} from '@material-ui/core';
import './header.css';

const Header = ({ siteTitle }) => {

  return(
    <div >
      <AppBar position="static" >
        <Toolbar className="root">
          <Typography variant="h6" >
            <Link to="/"  className="link" >
              MTG:Commander
            </Link>
          </Typography>
          <Typography variant="h6" >
            <Link to="/commanders" className="link" >
              Commanders
            </Link>
          </Typography>
          <Typography variant="h6" >
            <Link to="/contact"  className="link">
              Contact
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
  


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
