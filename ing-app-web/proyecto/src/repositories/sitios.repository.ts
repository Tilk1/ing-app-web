import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AtlasDataSource} from '../datasources';
import {Sitios, SitiosRelations} from '../models';

export class SitiosRepository extends DefaultCrudRepository<
  Sitios,
  typeof Sitios.prototype.Id,
  SitiosRelations
> {
  constructor(
    @inject('datasources.atlas') dataSource: AtlasDataSource,
  ) {
    super(Sitios, dataSource);
  }
}
