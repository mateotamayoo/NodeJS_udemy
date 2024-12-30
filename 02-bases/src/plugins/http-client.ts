import axios from 'axios';

export const httpClientPlugin = {

    get: async (url: string) => {
        // const response = await fetch(url);
        // const data = await response.json();
        // return data;
        const { data } = await axios.get(url);
        return data;

    },
};
