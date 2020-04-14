import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import {
  AppBar,
  Toolbar as MaterialToolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem
} from '@material-ui/core'
import { AccountCircle } from '@material-ui/icons'
import { ReactComponent as MainLogo } from 'pages/login/logo-react-zzaria.svg'
import { AuthContext } from 'contexts/auth'

const Main = () => {
  const [anchorElement, setAnchorElement] = useState(null)
  const { logout, userInfo } = useContext(AuthContext)
  const user = userInfo.user
  
  const handleOpenMenu = (e) => setAnchorElement(e.currentTarget)
  const handleClose = (e) => {
    setAnchorElement(null)
  }
  return (
    <AppBar>
      <Toolbar>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Typography color='inherit'>Olá {user.displayName.split(' ')[0]}</Typography>
        <IconButton color='inherit' onClick={handleOpenMenu}>
          <AccountCircle />
        </IconButton>
        <Menu
          anchorEl={anchorElement}
          open={Boolean(anchorElement)}
          onClose={handleClose}
        >
          <MenuItem onClick={logout}>Sair</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}

const Toolbar = styled(MaterialToolbar)`
  margin: 0 auto;
  max-width: 960px;
  width: 100%;
`

const LogoContainer = styled.div`
  flex-grow: 1;
`
const Logo = styled(MainLogo)`
  height: 50px; 
  width: 200px;
  & path {
    fill: #fff;
  }
  & line {
    stroke: #fff;
  }
`

export default Main
