import axios from 'axios';
import { handleApiError } from '../../errors/ApiErrors';

export interface BracketMatchup {
  r: number;
  m: number;
  t1: number | { w: number };
  t2: number | { l: number };
  w: number | null;
  l: number | null;
  t1_from?: { w: number } | { l: number };
  t2_from?: { w: number } | { l: number };
  p?: number;
}

export const getPlayoffBracketLosers = async (league_id: string): Promise<BracketMatchup[]> => {
  const url = `https://api.sleeper.app/v1/league/${league_id}/loses_bracket`; // Corrected endpoint
  try {
    const response = await axios.get<BracketMatchup[]>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw handleApiError(error.response?.status ?? 0);
    }
    throw error; // Keep this to handle other unexpected errors
  }
};
