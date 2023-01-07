import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import {AppBar,Toolbar,Typography} from '@mui/material';
import './header.css';
import { useTheme } from "@mui/material";

const Header = ({ siteTitle }) => {

  const theme = useTheme();

  return(
    <div >
      <AppBar position="static" >
        <Toolbar className="root">
          <Typography variant="h6" >
            <Link to="/"  className="link" sx={{color:theme.palette.secondary}} >
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
