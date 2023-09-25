import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  getWhereSchemaFor,
  param,
  patch,
  post,
  requestBody,
} from '@loopback/rest';
import {
  Sitios,
  Capturas,
} from '../models';
import {SitiosRepository} from '../repositories';

export class SitiosCapturasController {
  constructor(
    @repository(SitiosRepository) protected sitiosRepository: SitiosRepository,
  ) { }

  @get('/sitios/{id}/capturas', {
    responses: {
      '200': {
        description: 'Array of Sitios has many Capturas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Capturas)},
          },
        },
      },
    },
  })
  async find(
    @param.path.string('id') id: string,
    @param.query.object('filter') filter?: Filter<Capturas>,
  ): Promise<Capturas[]> {
    return this.sitiosRepository.capturas(id).find(filter);
  }

  @post('/sitios/{id}/capturas', {
    responses: {
      '200': {
        description: 'Sitios model instance',
        content: {'application/json': {schema: getModelSchemaRef(Capturas)}},
      },
    },
  })
  async create(
    @param.path.string('id') id: typeof Sitios.prototype.Id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Capturas, {
            title: 'NewCapturasInSitios',
            exclude: ['id'],
            optional: ['sitiosId']
          }),
        },
      },
    }) capturas: Omit<Capturas, 'id'>,
  ): Promise<Capturas> {
    return this.sitiosRepository.capturas(id).create(capturas);
  }

  @patch('/sitios/{id}/capturas', {
    responses: {
      '200': {
        description: 'Sitios.Capturas PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Capturas, {partial: true}),
        },
      },
    })
    capturas: Partial<Capturas>,
    @param.query.object('where', getWhereSchemaFor(Capturas)) where?: Where<Capturas>,
  ): Promise<Count> {
    return this.sitiosRepository.capturas(id).patch(capturas, where);
  }

  @del('/sitios/{id}/capturas', {
    responses: {
      '200': {
        description: 'Sitios.Capturas DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.string('id') id: string,
    @param.query.object('where', getWhereSchemaFor(Capturas)) where?: Where<Capturas>,
  ): Promise<Count> {
    return this.sitiosRepository.capturas(id).delete(where);
  }
}
