
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";

import { identityHttp } from "services/credentialService";
import accessToken from "./useAuth";

const useIdentityHttp = () => {
    const refresh = useRefreshToken();
    const { getAccessToken } = accessToken();

    useEffect(() => {
        const requestIntercept = identityHttp.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = `Bearer ${getAccessToken()}`;
                }
                return config;
            }, (error) => Promise.reject(error)
        );
        const responseIntercept = identityHttp.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return identityHttp(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            identityHttp.interceptors.request.eject(requestIntercept);
            identityHttp.interceptors.response.eject(responseIntercept);
        }
    }, [refresh])

    return identityHttp;
}

export default useIdentityHttp;