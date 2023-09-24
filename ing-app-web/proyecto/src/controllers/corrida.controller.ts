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
import {Corridas} from '../models';
import {CorridasRepository} from '../repositories';

export class CorridaController {
  constructor(
    @repository(CorridasRepository)
    public corridasRepository : CorridasRepository,
  ) {}

  @post('/corridas')
  @response(200, {
    description: 'Corridas model instance',
    content: {'application/json': {schema: getModelSchemaRef(Corridas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Corridas, {
            title: 'NewCorridas',
            
          }),
        },
      },
    })
    corridas: Corridas,
  ): Promise<Corridas> {
    return this.corridasRepository.create(corridas);
  }

  @get('/corridas/count')
  @response(200, {
    description: 'Corridas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Corridas) where?: Where<Corridas>,
  ): Promise<Count> {
    return this.corridasRepository.count(where);
  }

  @get('/corridas')
  @response(200, {
    description: 'Array of Corridas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Corridas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Corridas) filter?: Filter<Corridas>,
  ): Promise<Corridas[]> {
    return this.corridasRepository.find(filter);
  }

  @patch('/corridas')
  @response(200, {
    description: 'Corridas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Corridas, {partial: true}),
        },
      },
    })
    corridas: Corridas,
    @param.where(Corridas) where?: Where<Corridas>,
  ): Promise<Count> {
    return this.corridasRepository.updateAll(corridas, where);
  }

  @get('/corridas/{id}')
  @response(200, {
    description: 'Corridas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Corridas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Corridas, {exclude: 'where'}) filter?: FilterExcludingWhere<Corridas>
  ): Promise<Corridas> {
    return this.corridasRepository.findById(id, filter);
  }

  @patch('/corridas/{id}')
  @response(204, {
    description: 'Corridas PATCH success',
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Corridas, {partial: true}),
        },
      },
    })
    corridas: Corridas,
  ): Promise<void> {
    await this.corridasRepository.updateById(id, corridas);
  }

  @put('/corridas/{id}')
  @response(204, {
    description: 'Corridas PUT success',
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() corridas: Corridas,
  ): Promise<void> {
    await this.corridasRepository.replaceById(id, corridas);
  }

  @del('/corridas/{id}')
  @response(204, {
    description: 'Corridas DELETE success',
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.corridasRepository.deleteById(id);
  }
}
