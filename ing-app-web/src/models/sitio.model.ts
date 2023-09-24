import {Entity, model, property} from '@loopback/repository';

@model()
export class Sitio extends Entity {
  @property({
    type: 'number',
    id: true, // Marcar esta propiedad como ID
    generated: true, // Configurar como autoincremental
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  constructor(data?: Partial<Sitio>) {
    super(data);
  }
}
