import axios, { AxiosError } from 'axios';
import { handleApiError } from '../../errors/ApiErrors';

export interface NFLState {
  week: number;
  season_type: string;
  season_start_date: string;
  season: string;
  previous_season: string;
  leg: number;
  league_season: string;
  league_create_season: string;
  display_week: number;
}

export const getNFLState = async (sport: string): Promise<NFLState> => {
  const url = `https://api.sleeper.app/v1/state/${sport}`;
  try {
    const response = await axios.get<NFLState>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw handleApiError(error.response?.status ?? 0);
    }
    throw error; // Keep this to handle other unexpected errors
  }
};
