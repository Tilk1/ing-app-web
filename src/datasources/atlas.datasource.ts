import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'atlas',
  connector: 'mongodb',
  port:27017,
  url: 'mongodb+srv://santiagolizondo:lala123@cluster0.p4kn4da.mongodb.net/test?retryWrites=true&w=majority',
  useNewUrlParser: true
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class AtlasDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'atlas';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.atlas', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
