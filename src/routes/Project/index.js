import ProjectView from './components/ProjectView'
import EntityRoute from '../Entity'

// Sync route definition
export default {
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Home = require('./containers/ProjectViewContainer').default

      /*  Return getComponent   */
      cb(null, Home)

      /* Webpack named bundle   */
    }, 'project')
  },
  path: '/project/:id',
  childRoutes: [
    EntityRoute
  ]
}
