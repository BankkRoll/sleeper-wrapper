import axios from 'axios';
import { handleApiError } from '../../errors/ApiErrors';

export interface Roster {
  starters: string[];
  settings: {
    wins: number;
    waiver_position: number;
    waiver_budget_used: number;
    total_moves: number;
    ties: number;
    losses: number;
    fpts_decimal: number;
    fpts_against_decimal: number;
    fpts_against: number;
    fpts: number;
  };
  roster_id: number;
  reserve: string[];
  players: string[];
  owner_id: string;
  league_id: string;
}

export const getRostersInLeague = async (leagueId: string): Promise<Roster[]> => {
  const url = `https://api.sleeper.app/v1/league/${leagueId}/rosters`;
  try {
    const response = await axios.get<Roster[]>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw handleApiError(error.response?.status ?? 0);
    }
    throw error; // Keep this to handle other unexpected errors
  }
};
