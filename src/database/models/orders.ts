import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Customer } from '../../modules/customer/customer.models';

@Table({ tableName: 'orders' })
export class Order extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id: number;

  @BelongsTo(() => Customer)
  customer: Customer;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  customer_name: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  order_date: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  product_name: string;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  total: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  product_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataType.DECIMAL(10, 2),
    allowNull: false,
  })
  price: number;
}
