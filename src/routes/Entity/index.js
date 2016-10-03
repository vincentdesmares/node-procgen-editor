import EntityView from './components/EntityView'


// Sync route definition
export default {
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
     and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
       dependencies for bundling   */
      const Home = require('./containers/EntityListContainer').default

      /*  Return getComponent   */
      cb(null, Home)

      /* Webpack named bundle   */
    }, 'entity')
  },
  path: '/project/:projectId/entity',
  childRoutes: [
    {
      getComponent (nextState, cb) {
        /*  Webpack - use 'require.ensure' to create a split point
         and embed an async module loader (jsonp) when bundling   */
        require.ensure([], (require) => {
          /*  Webpack - use require callback to define
           dependencies for bundling   */
          const Home = require('./containers/EntityManageContainer').default

          /*  Return getComponent   */
          cb(null, Home)

          /* Webpack named bundle   */
        }, 'entityManage')
      },
      path: '/project/:projectId/entity/:entityId'
    }
  ]
}
