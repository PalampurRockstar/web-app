
import axios from 'axios';
import { identityHttp } from 'services/credentialService';
import accessToken from './useAuth';


const useRefreshToken = () => {
    const { setAccessToken} = accessToken();

    const refresh = async () => {
        const response = await identityHttp.post('/credentials/refresh', null,{
            withCredentials: true
        });
        setAccessToken(response.data.access_token);
        return response.data.access_token;
    }
    return refresh;
};

export default useRefreshToken;
