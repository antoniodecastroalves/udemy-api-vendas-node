import { DataSource } from 'typeorm';

import User from '@modules/users/infra/typeorm/entities/User';
import UserToken from '@modules/users/infra/typeorm/entities/UserToken';
import Customer from '@modules/customers/infra/typeorm/entities/Customer';
import Order from '@modules/orders/infra/typeorm/entities/Order';
import OrdersProducts from '@modules/orders/infra/typeorm/entities/OrdersProducts';
import Product from '@modules/products/infra/typeorm/entities/Product';

import { CreateProducts1676551232331 } from './migrations/1676551232331-CreateProducts';
import { CreateUsers1678991588431 } from './migrations/1678991588431-CreateUsers';
import { CreateUserTokens1679755338456 } from './migrations/1679755338456-CreateUserTokens';
import { CreateCustomers1680646840851 } from './migrations/1680646840851-CreateCustomers';
import { CreateOrders1680907633551 } from './migrations/1680907633551-CreateOrders';
import { AddCustomerIdToOrders1680908812729 } from './migrations/1680908812729-AddCustomerIdToOrders';
import { CreateOrdersProducts1680998522445 } from './migrations/1680998522445-CreateOrdersProducts';
import { AddOrderIdToOrdersProducts1681006290037 } from './migrations/1681006290037-AddOrderIdToOrdersProducts';
import { AddProductIdOrdersProducts1681008108794 } from './migrations/1681008108794-AddProductIdOrdersProducts';
import { AddOrderFieldtoOrders1682559844394 } from './migrations/1682559844394-AddOrderFieldtoOrders';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'apivendas',
  entities: [User, UserToken, Customer, Order, OrdersProducts, Product],
  migrations: [
    CreateProducts1676551232331,
    CreateUsers1678991588431,
    CreateUserTokens1679755338456,
    CreateCustomers1680646840851,
    CreateOrders1680907633551,
    AddCustomerIdToOrders1680908812729,
    CreateOrdersProducts1680998522445,
    AddOrderIdToOrdersProducts1681006290037,
    AddProductIdOrdersProducts1681008108794,
    AddOrderFieldtoOrders1682559844394,
  ],
});
