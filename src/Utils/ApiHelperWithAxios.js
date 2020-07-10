import axios from 'axios';
let baseURL = 'https://axios-crud-server.herokuapp.com/';

const AxiosAPIHelper = {
    MakeRequest: (endpoint, method, SuccessBlock, CatchBlock, FinallyBlock) => {
        let url = baseURL + endpoint;
        return axios({
            method: method,
            url: url,
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
        let url = baseURL + endpoint;
        return axios({
            method: method,
            url: url,
            data: body
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