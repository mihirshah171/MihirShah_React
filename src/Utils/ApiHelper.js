const baseURL = process.env.REACT_APP_BASEURL

const APIHelper = {
    MakeRequest: (endpoint, method, SuccessBlock, CatchBlock, FinallyBlock) => {
        const url = baseURL + endpoint;
        return fetch(
            url,
            {
                cache: 'no-cache',
                credentials: 'same-origin',
                method,
                redirect: 'follow',
                referrer: 'no-referrer'
            }
        )
            .then((response) => response.json())
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
        return fetch(
            url,
            {
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json'
                },
                method
            }
        )
            .then((response) => response.json())
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
