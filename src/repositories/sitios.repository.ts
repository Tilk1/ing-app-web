import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {AtlasDataSource} from '../datasources';
import {Sitios, SitiosRelations, Capturas} from '../models';
import {CapturasRepository} from './capturas.repository';

export class SitiosRepository extends DefaultCrudRepository<
  Sitios,
  typeof Sitios.prototype.Id,
  SitiosRelations
> {

  public readonly capturas: HasManyRepositoryFactory<Capturas, typeof Sitios.prototype.Id>;

  constructor(
    @inject('datasources.atlas') dataSource: AtlasDataSource, @repository.getter('CapturasRepository') protected capturasRepositoryGetter: Getter<CapturasRepository>,
  ) {
    super(Sitios, dataSource);
    this.capturas = this.createHasManyRepositoryFactoryFor('capturas', capturasRepositoryGetter,);
    this.registerInclusionResolver('capturas', this.capturas.inclusionResolver);
  }
}
