import {Entity, model, property} from '@loopback/repository';

@model()
export class Corridas extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Id?: number;

  @property({
    type: 'number',
  })
  sitioId?: number;

  constructor(data?: Partial<Corridas>) {
    super(data);
  }
}

export interface CorridasRelations {
  // describe navigational properties here
}

export type CorridasWithRelations = Corridas & CorridasRelations;
