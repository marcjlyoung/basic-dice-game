import { DataTypes, Model } from "sequelize";
import sequelize from "../database";
import { Bet } from "./Bet";

export class User extends Model {
  declare id: number;
  declare name: string;
  declare balance: number;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    balance: {
      type: DataTypes.FLOAT,
      defaultValue: "0.00",
    },
  },
  { sequelize }
);

User.hasMany(Bet, { foreignKey: "userId" });

export const getUserById = (id: number) =>
  User.findOne({
    where: {
      id,
    },
  });

export const getUser = () => User.findOne();

export const getUsers = () => User.findAll();

export const createUser = (name: string, balance?: number) =>
  User.create({
    name,
    balance,
  });

export const updateUser = async (args: Partial<User>, userId: number) =>
  User.update(args, {
    where: {
      id: userId,
    },
  });
