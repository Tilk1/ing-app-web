import {Entity, model, property} from '@loopback/repository';

@model()
export class Sitios extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id?: number;

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


  constructor(data?: Partial<Sitios>) {
    super(data);
  }
}

export interface SitiosRelations {
  // describe navigational properties here
}

export type SitiosWithRelations = Sitios & SitiosRelations;
