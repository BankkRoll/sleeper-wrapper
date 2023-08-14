import axios, { AxiosError } from 'axios';
import { handleApiError } from '../../errors/ApiErrors';

export interface TrendingPlayer {
  player_id: string;
  count: number;
}

export const getTrendingPlayers = async (sport: string, type: string, lookback_hours?: number, limit?: number): Promise<TrendingPlayer[]> => {
  const url = `https://api.sleeper.app/v1/players/${sport}/trending/${type}`;
  const params = { lookback_hours, limit };
  try {
    const response = await axios.get<TrendingPlayer[]>(url, { params });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw handleApiError(error.response?.status ?? 0);
    }
    throw error; // Keep this to handle other unexpected errors
  }
};
