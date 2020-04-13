import { PureComponent } from 'react'
import types from 'prop-types'

class ErrorBoundary extends PureComponent {
  state = { hasError: false }

  static getDerivedStateFromError () {
    return { hasError: true }
  }

  componentDidCatch () {}

  render () {
    return this.props.children(this.state.hasError)
  }
}

ErrorBoundary.propTypes = {
  children: types.func.isRequired
}

export default ErrorBoundary
