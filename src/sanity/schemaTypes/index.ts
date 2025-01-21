import { type SchemaTypeDefinition } from 'sanity'
import { product } from './products'
import { Category } from './category'
import  { UserSchema} from './user'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ Category , product  , UserSchema]  ,
}
