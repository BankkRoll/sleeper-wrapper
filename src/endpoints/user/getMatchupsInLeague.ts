import axios from 'axios';
import { handleApiError } from '../../errors/ApiErrors';

export interface Matchup {
  starters: string[];
  roster_id: number;
  players: string[];
  matchup_id: number;
  points: number;
  custom_points: number | null;
}

export const getMatchupsInLeague = async (leagueId: string, week: string): Promise<Matchup[]> => {
  const url = `https://api.sleeper.app/v1/league/${leagueId}/matchups/${week}`;
  try {
    const response = await axios.get<Matchup[]>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw handleApiError(error.response?.status ?? 0);
    }
    throw error; // Keep this to handle other unexpected errors
  }
};
