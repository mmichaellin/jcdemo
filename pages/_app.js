import App from 'next/app'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import store from '../redux/store'
import '../styles/globals.css'

class myApp extends App {
  static async getInitialProps(Component, ctx) {
    const appProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {}
    return { appProps: appProps }
  }
  render() {
    const { Component, appProps } = this.props
    return (
      <Provider store={store}>
        <Component {...appProps} />
      </Provider>
    )
  }
}

const makeStore = () => store

export default withRedux(makeStore)(myApp)
