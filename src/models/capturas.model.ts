import {Entity, model, property} from '@loopback/repository';

@model()
export class Capturas extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'object',
  })
  pages?: {
    url: string;
    titulo: string;
    body: string; // Puedes usar string o JSX.Element según tus necesidades
  }[];

  @property({
    type: 'number',
  })
  sitiosId?: number;

  constructor(data?: Partial<Capturas>) {
    super(data);
  }
}

export interface CapturasRelations {
  // describe navigational properties here
}

export type CapturasWithRelations = Capturas & CapturasRelations;
