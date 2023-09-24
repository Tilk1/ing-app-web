import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {SourceDataSource} from '../datasources';
import {Sitio, SitioRelations, Corridas} from '../models';
import {CorridasRepository} from './corridas.repository';

export class SitioRepository extends DefaultCrudRepository<
  Sitio,
  typeof Sitio.prototype.Id,
  SitioRelations
> {

  public readonly corridas: HasManyRepositoryFactory<Corridas, typeof Sitio.prototype.Id>;

  constructor(
    @inject('datasources.source') dataSource: SourceDataSource, @repository.getter('CorridasRepository') protected corridasRepositoryGetter: Getter<CorridasRepository>,
  ) {
    super(Sitio, dataSource);
    this.corridas = this.createHasManyRepositoryFactoryFor('corridas', corridasRepositoryGetter,);
    this.registerInclusionResolver('corridas', this.corridas.inclusionResolver);
  }
}
