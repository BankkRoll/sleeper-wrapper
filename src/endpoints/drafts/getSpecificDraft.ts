import axios, { AxiosError } from 'axios';
import { Draft } from './getAllDraftsForLeague';
import { handleApiError } from '../../errors/ApiErrors';

export const getSpecificDraft = async (draftId: string): Promise<Draft> => {
  const url = `https://api.sleeper.app/v1/draft/${draftId}`;
  try {
    const response = await axios.get<Draft>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw handleApiError(error.response?.status ?? 0);
    }
    throw error; // Keep this to handle other unexpected errors
  }
};

