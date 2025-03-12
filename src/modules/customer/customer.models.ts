import {
  Table,
  Column,
  Model,
  DataType,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
// import { Order } from './order.model';
// import { CustomerOrder } from './customer-order.model';

@Table
export class Customer extends Model<Customer> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  })
  declare id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  //   @HasMany(() => Order)
  //   orders: Order[];

  //   @BelongsToMany(() => Order, () => CustomerOrder)
  //   customerOrders: Order[];
}
