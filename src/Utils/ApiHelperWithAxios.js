import axios from 'axios';
const baseURL = process.env.REACT_APP_BASEURL;

const AxiosAPIHelper = {
    MakeRequest: (endpoint, method, SuccessBlock, CatchBlock, FinallyBlock) => {
        const url = baseURL + endpoint;
        return axios({
            method,
            url,
        })
            .then((response) => {
                if (SuccessBlock) {
                    return SuccessBlock(response);
                }
                return null;
            })
            .catch((error) => {
                if (CatchBlock) {
                    return CatchBlock(error);
                }
                return null;
            })
            .finally(() => {
                if (FinallyBlock) {
                    return FinallyBlock()
                }
                return null;
            });
    },
    MakeRequestWithBody: (endpoint, method, body, SuccessBlock, CatchBlock, FinallyBlock) => {
        const url = baseURL + endpoint;
        return axios({
            data: body,
            method,
            url
        })
            .then((response) => {
                if (SuccessBlock) {
                    return SuccessBlock(response);
                }
                return null;
            })
            .catch((error) => {
                if (CatchBlock) {
                    return CatchBlock(error);
                }
                return null;
            })
            .finally(() => {
                if (FinallyBlock) {
                    return FinallyBlock()
                }
                return null;
            });
    }
}

export default AxiosAPIHelper;
