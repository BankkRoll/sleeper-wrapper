import axios, { AxiosError } from 'axios';
import { handleApiError } from '../../errors/ApiErrors';

export interface Pick {
  player_id: string;
  picked_by: string;
  roster_id: string;
  round: number;
  draft_slot: number;
  pick_no: number;
  metadata: object;
  is_keeper: any;
  draft_id: string;
}

export const getAllPicksInDraft = async (draftId: string): Promise<Pick[]> => {
  const url = `https://api.sleeper.app/v1/draft/${draftId}/picks`;
  try {
    const response = await axios.get<Pick[]>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw handleApiError(error.response?.status ?? 0);
    }
    throw error; // Keep this to handle other unexpected errors
  }
};
