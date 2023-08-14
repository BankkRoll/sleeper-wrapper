import axios, { AxiosError } from 'axios';
import { handleApiError } from '../../errors/ApiErrors';

export interface TradedPick {
  season: string;
  round: number;
  roster_id: number;
  previous_owner_id: number;
  owner_id: number;
}

export const getTradedPicks = async (league_id: string): Promise<TradedPick[]> => {
  const url = `https://api.sleeper.app/v1/league/${league_id}/traded_picks`;
  try {
    const response = await axios.get<TradedPick[]>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw handleApiError(error.response?.status ?? 0);
    }
    throw error; // Keep this to handle other unexpected errors
  }
};
