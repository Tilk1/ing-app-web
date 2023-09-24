import {Entity, model, property, hasMany} from '@loopback/repository';
import {Corridas} from './corridas.model';

@model()
export class Sitio extends Entity {
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

  @hasMany(() => Corridas)
  corridas: Corridas[];

  constructor(data?: Partial<Sitio>) {
    super(data);
  }
}

export interface SitioRelations {
  // describe navigational properties here
}

export type SitioWithRelations = Sitio & SitioRelations;
