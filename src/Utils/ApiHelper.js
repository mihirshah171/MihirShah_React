let baseURL = 'https://axios-crud-server.herokuapp.com/';

const APIHelper = {
    MakeRequest: (endpoint, method, SuccessBlock, CatchBlock, FinallyBlock) => {
        let url = baseURL + endpoint;
        return fetch(url,
            {
                method: method,
                redirect: 'follow',
                referrer: 'no-referrer',
                cache: 'no-cache',
                credentials: 'same-origin'
            })
            .then(response => response.json())
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
        return fetch(url,
            {
                method: method,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            })
            .then(response => response.json())
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
};

export default APIHelper;