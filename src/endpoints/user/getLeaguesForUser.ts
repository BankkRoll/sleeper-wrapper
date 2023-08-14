import axios from 'axios';
import { handleApiError } from '../../errors/ApiErrors';

export interface League {
  [x: string]: Key | null | undefined;
  total_rosters: number;
  status: string;
  sport: string;
  settings: object;
  season_type: string;
  season: string;
  scoring_settings: object;
  roster_positions: string[];
  previous_league_id: string;
  name: string;
  league_id: string;
  draft_id: string;
  avatar: string;
}

export const getLeaguesForUser = async (userId: string, sport: string, season: string): Promise<League[]> => {
  const url = `https://api.sleeper.app/v1/user/${userId}/leagues/${sport}/${season}`;
  try {
    const response = await axios.get<League[]>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw handleApiError(error.response?.status ?? 0);
    }
    throw error; // Keep this to handle other unexpected errors
  }
};
