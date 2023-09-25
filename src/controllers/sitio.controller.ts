import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Sitios} from '../models';
import {SitiosRepository} from '../repositories';

export class SitioController {
  constructor(
    @repository(SitiosRepository)
    public sitiosRepository : SitiosRepository,
  ) {}

  @post('/sitios')
  @response(200, {
    description: 'Sitios model instance',
    content: {'application/json': {schema: getModelSchemaRef(Sitios)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sitios, {
            title: 'NewSitios',
            exclude: ['Id'],
          }),
        },
      },
    })
    sitios: Omit<Sitios, 'Id'>,
  ): Promise<Sitios> {
    return this.sitiosRepository.create(sitios);
  }

  @get('/sitios/count')
  @response(200, {
    description: 'Sitios model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Sitios) where?: Where<Sitios>,
  ): Promise<Count> {
    return this.sitiosRepository.count(where);
  }

  @get('/sitios')
  @response(200, {
    description: 'Array of Sitios model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Sitios, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Sitios) filter?: Filter<Sitios>,
  ): Promise<Sitios[]> {
    return this.sitiosRepository.find(filter);
  }

  @patch('/sitios')
  @response(200, {
    description: 'Sitios PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sitios, {partial: true}),
        },
      },
    })
    sitios: Sitios,
    @param.where(Sitios) where?: Where<Sitios>,
  ): Promise<Count> {
    return this.sitiosRepository.updateAll(sitios, where);
  }

  @get('/sitios/{id}')
  @response(200, {
    description: 'Sitios model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Sitios, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Sitios, {exclude: 'where'}) filter?: FilterExcludingWhere<Sitios>
  ): Promise<Sitios> {
    return this.sitiosRepository.findById(id, filter);
  }

  @patch('/sitios/{id}')
  @response(204, {
    description: 'Sitios PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Sitios, {partial: true}),
        },
      },
    })
    sitios: Sitios,
  ): Promise<void> {
    await this.sitiosRepository.updateById(id, sitios);
  }

  @put('/sitios/{id}')
  @response(204, {
    description: 'Sitios PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() sitios: Sitios,
  ): Promise<void> {
    await this.sitiosRepository.replaceById(id, sitios);
  }

  @del('/sitios/{id}')
  @response(204, {
    description: 'Sitios DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.sitiosRepository.deleteById(id);
  }
}
