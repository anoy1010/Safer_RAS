import {blockContent} from './schemas/blockContent'
import {category} from './schemas/category'
import {post} from './schemas/post'
import {author} from './schemas/author'
import { banner } from './schemas/banner'
import { product } from './schemas/product'
import { user } from './schemas/user-schema'
import { order } from './schemas/order-schema'

export const schema = {
  types: [user, order, banner, product],
}
