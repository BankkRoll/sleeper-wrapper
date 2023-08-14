import axios, { AxiosError } from 'axios';
import { handleApiError } from '../../errors/ApiErrors';

interface DraftPick {
  season: string;
  round: number;
  roster_id: number;
  previous_owner_id: number;
  owner_id: number;
}

interface WaiverBudget {
  sender: number;
  receiver: number;
  amount: number;
}

export interface Transaction {
  type: string; // Could define a specific type like 'trade' | 'free_agent'
  transaction_id: string;
  status_updated: number;
  status: string;
  settings: { waiver_bid?: number } | null;
  roster_ids: number[];
  metadata: Record<string, any> | null;
  leg: number;
  drops: Record<string, number> | null;
  draft_picks: DraftPick[];
  creator: string;
  created: number;
  consenter_ids: number[];
  adds: Record<string, number> | null;
  waiver_budget: WaiverBudget[];
}

export const getTransactions = async (league_id: string, round: string): Promise<Transaction[]> => {
  const url = `https://api.sleeper.app/v1/league/${league_id}/transactions/${round}`;
  try {
    const response = await axios.get<Transaction[]>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw handleApiError(error.response?.status ?? 0);
    }
    throw error; // Keep this to handle other unexpected errors
  }
};
