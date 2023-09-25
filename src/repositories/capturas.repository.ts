import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AtlasDataSource} from '../datasources';
import {Capturas, CapturasRelations} from '../models';

export class CapturasRepository extends DefaultCrudRepository<
  Capturas,
  typeof Capturas.prototype.id,
  CapturasRelations
> {
  constructor(
    @inject('datasources.atlas') dataSource: AtlasDataSource,
  ) {
    super(Capturas, dataSource);
  }
}
