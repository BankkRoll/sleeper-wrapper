import axios, { AxiosError } from 'axios';
import { handleApiError } from '../../errors/ApiErrors';

export interface Player {
  hashtag: string;
  depth_chart_position: number;
  status: string;
  sport: string;
  fantasy_positions: string[];
  number: number;
  search_last_name: string;
  injury_start_date: string | null;
  weight: string;
  position: string;
  practice_participation: string | null;
  sportradar_id: string;
  team: string;
  last_name: string;
  college: string;
  fantasy_data_id: number;
  injury_status: string | null;
  player_id: string;
  height: string;
  search_full_name: string;
  age: number;
  stats_id: string;
  birth_country: string;
  espn_id: string;
  search_rank: number;
  first_name: string;
  depth_chart_order: number;
  years_exp: number;
  rotowire_id: string | null;
  rotoworld_id: number;
  search_first_name: string;
  yahoo_id: string | null;
}

export const fetchAllPlayers = async (sport: string): Promise<Record<string, Player>> => {
    const url = `https://api.sleeper.app/v1/players/${sport}`;
    try {
      const response = await axios.get<Record<string, Player>>(url);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        throw handleApiError(error.response?.status ?? 0);
      }
      throw error; // Keep this to handle other unexpected errors
    }
  };