import { type SchemaTypeDefinition } from 'sanity'
import { product } from './products'
import { Category } from './category'
import  { UserSchema} from './user'
import { Order } from './order'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ Category , product  , UserSchema , Order]  ,
}
