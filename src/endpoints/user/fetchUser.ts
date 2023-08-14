import axios from 'axios';
import { handleApiError } from '../../errors/ApiErrors';

export interface UserResponse {
  username: string;
  user_id: string;
  displayName: string;
  avatar: string;
}

export const fetchUser = async (usernameOrId: string): Promise<UserResponse> => {
  const url = `https://api.sleeper.app/v1/user/${usernameOrId}`;
  
  try {
    const response = await axios.get<UserResponse>(url);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw handleApiError(error.response?.status ?? 0);
    }
    throw error; // Keep this to handle other unexpected errors
  }
};
