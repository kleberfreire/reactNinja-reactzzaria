import React, { useContext } from 'react'
import styled from 'styled-components'
import { Button, Grid } from '@material-ui/core'
import { ReactComponent as MainLogo } from './logo-react-zzaria.svg'
import { AuthContext } from 'contexts/auth'
const Login = () => {
  const { login } = useContext(AuthContext)
  return (
    <Container>
      <Grid>
        <Grid>
          <Logo />
        </Grid>
        <Grid container justify='center'>
          <GitHubButton onClick={login}>
            Entra com GitHub
          </GitHubButton>
        </Grid>
      </Grid>
    </Container>)
}

const Container = styled.div`
  padding: 20px;
`

const Logo = styled(MainLogo)`
  width: 100%
`

const GitHubButton = styled(Button).attrs({
  variant: 'contained',
  fullWidth: true
})`
  border-radius: 0px;
  font-size: 25px;
  margin-top: 40px;
  max-width: 480px;
  padding: 20px;
  text-transform: none;
`
export default Login
