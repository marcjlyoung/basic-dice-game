import { DataTypes, Model, Sequelize } from "sequelize";
import sequelize from "../database";
import { User } from "./User";

export class Bet extends Model {
  declare id: number;
  declare betAmount: number;
  declare chance: number;
  declare payout: number;
  declare win: boolean;
  declare userId: number;
}

Bet.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    betAmount: {
      type: DataTypes.FLOAT,
    },
    chance: {
      type: DataTypes.FLOAT,
    },
    payout: {
      type: DataTypes.FLOAT,
      defaultValue: "0.00",
    },
    win: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  { sequelize }
);

export const getBetById = (id: number) =>
  Bet.findOne({
    where: {
      id,
    },
  });

export const getBet = () => Bet.findOne();

export const getBets = () => Bet.findAll();

export const createBet = (
  user: User,
  betAmount: number,
  chance: number,
  payout: number,
  win: boolean
) =>
  Bet.create({
    userId: user.id,
    betAmount,
    chance,
    payout,
    win,
  });

export const getBestBetPerUser = (limit?: number) => {
  return Bet.findAll({
    group: "userId",
    attributes: {
      include: [[sequelize.fn("MAX", sequelize.col("payout")), "payout"]],
      exclude: ["payout"],
    },
    limit,
  });
};
