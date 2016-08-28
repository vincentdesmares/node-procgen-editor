import HomeView from './components/HomeView'

// Sync route definition
export default {
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Home = require('./containers/HomeViewContainer').default

      /*  Return getComponent   */
      cb(null, Home)

      /* Webpack named bundle   */
    }, 'home')
  }
}
