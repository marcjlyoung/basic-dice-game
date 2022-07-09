import { createBet } from "../models/Bet";
import { updateUser, User } from "../models/User";

const MULTIPLIER_BASE = 100;

export const handleBet = async (
  user: User,
  betAmount: number,
  chance: number
) => {
  // Make use of Math.random to simulate a win or loss
  const win = !!Math.round(Math.random());

  let payout = 0;

  if (win) {
    const multiplier = MULTIPLIER_BASE / chance;

    payout = betAmount * multiplier;
  }

  /**  NB! An improvement for a live application using SQL/PostGress would be to
       use Database locking to avoid race conditions on balance updates */
  const [settledBet] = await Promise.all([
    createBet(user, betAmount, chance, payout, win),
    updateUser(
      {
        balance: user.balance - betAmount + payout,
      },
      user.id
    ),
  ]);

  return settledBet;
};
