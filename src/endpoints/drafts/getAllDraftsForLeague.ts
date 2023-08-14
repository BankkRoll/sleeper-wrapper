import axios, { AxiosError } from 'axios';
import { handleApiError } from '../../errors/ApiErrors';

export interface Draft {
  type: string;
  status: string;
  start_time: number;
  sport: string;
  settings: object;
  season_type: string;
  season: string;
  metadata: object;
  league_id: string;
  last_picked: number;
  draft_id: string;
  created: number;
}

export const getAllDraftsForLeague = async (leagueId: string): Promise<Draft[]> => {
  const url = `https://api.sleeper.app/v1/league/${leagueId}/drafts`;
  try {
    const response = await axios.get<Draft[]>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw handleApiError(error.response?.status ?? 0);
    }
    throw error; // Keep this to handle other unexpected errors
  }
};
