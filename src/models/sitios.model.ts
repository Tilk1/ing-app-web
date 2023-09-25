import {Entity, model, property, hasMany} from '@loopback/repository';
import {Capturas} from './capturas.model';

@model()
export class Sitios extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  Id?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  URL: string;
  
  @property({
    type: 'number',
    required: true,
  })
  profundidad_hojas: number;

  @property({
    type: 'string',
    required: true,
  })
  document_extractor: string;

  @property({
    type: 'number',
    required: true,
  })
  max_retrys: number;

  @property({
    type: 'number',
    required: true,
  })
  timeout: number;

  @hasMany(() => Capturas)
  capturas: Capturas[];

  constructor(data?: Partial<Sitios>) {
    super(data);
  }
}

export interface SitiosRelations {
  // describe navigational properties here
}

export type SitiosWithRelations = Sitios & SitiosRelations;
