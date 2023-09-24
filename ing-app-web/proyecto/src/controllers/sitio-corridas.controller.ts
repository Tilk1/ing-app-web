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
  Sitio,
  Corridas,
} from '../models';
import {SitioRepository} from '../repositories';

export class SitioCorridasController {
  constructor(
    @repository(SitioRepository) protected sitioRepository: SitioRepository,
  ) { }

  @get('/sitios/{id}/corridas', {
    responses: {
      '200': {
        description: 'Array of Sitio has many Corridas',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Corridas)},
          },
        },
      },
    },
  })
  async find(
    @param.path.number('id') id: number,
    @param.query.object('filter') filter?: Filter<Corridas>,
  ): Promise<Corridas[]> {
    return this.sitioRepository.corridas(id).find(filter);
  }

  @post('/sitios/{id}/corridas', {
    responses: {
      '200': {
        description: 'Sitio model instance',
        content: {'application/json': {schema: getModelSchemaRef(Corridas)}},
      },
    },
  })
  async create(
    @param.path.number('id') id: typeof Sitio.prototype.Id,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Corridas, {
            title: 'NewCorridasInSitio',
            exclude: ['Id'],
            optional: ['sitioId']
          }),
        },
      },
    }) corridas: Omit<Corridas, 'Id'>,
  ): Promise<Corridas> {
    return this.sitioRepository.corridas(id).create(corridas);
  }

  @patch('/sitios/{id}/corridas', {
    responses: {
      '200': {
        description: 'Sitio.Corridas PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async patch(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Corridas, {partial: true}),
        },
      },
    })
    corridas: Partial<Corridas>,
    @param.query.object('where', getWhereSchemaFor(Corridas)) where?: Where<Corridas>,
  ): Promise<Count> {
    return this.sitioRepository.corridas(id).patch(corridas, where);
  }

  @del('/sitios/{id}/corridas', {
    responses: {
      '200': {
        description: 'Sitio.Corridas DELETE success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async delete(
    @param.path.number('id') id: number,
    @param.query.object('where', getWhereSchemaFor(Corridas)) where?: Where<Corridas>,
  ): Promise<Count> {
    return this.sitioRepository.corridas(id).delete(where);
  }
}
