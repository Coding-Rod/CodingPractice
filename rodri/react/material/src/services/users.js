import axios from 'axios';
import { URL } from '../constants';
import { API_KEY } from '../constants/api-key';

export const getGitHubUser = async (username) => {
    const response = await axios.get(
        `${URL}/${username}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`,
            },
        }
        );
    return response.data;
};