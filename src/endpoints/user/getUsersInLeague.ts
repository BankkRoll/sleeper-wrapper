import axios from 'axios';
import { handleApiError } from '../../errors/ApiErrors';

export interface LeagueUser {
  user_id: string;
  username: string;
  display_name: string;
  avatar: string;
  metadata: {
    team_name: string;
  };
  is_owner: boolean;
}

export const getUsersInLeague = async (leagueId: string): Promise<LeagueUser[]> => {
  const url = `https://api.sleeper.app/v1/league/${leagueId}/users`;
  try {
    const response = await axios.get<LeagueUser[]>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw handleApiError(error.response?.status ?? 0);
    }
    throw error; // Keep this to handle other unexpected errors
  }
};
