import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {DatasourceDataSource} from '../datasources';
import {Sitio} from '../models';

export class SitioRepository extends DefaultCrudRepository<
  Sitio,
  typeof Sitio.prototype.id
> {
  constructor(
    @inject('datasources.Datasource') dataSource: DatasourceDataSource,
  ) {
    super(Sitio, dataSource);
  }
}
