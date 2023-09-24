import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {SourceDataSource} from '../datasources';
import {Corridas, CorridasRelations} from '../models';

export class CorridasRepository extends DefaultCrudRepository<
  Corridas,
  typeof Corridas.prototype.Id,
  CorridasRelations
> {
  constructor(
    @inject('datasources.source') dataSource: SourceDataSource,
  ) {
    super(Corridas, dataSource);
  }
}
