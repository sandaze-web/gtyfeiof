import {$addresses} from "../http/addresses";

export const fetchAddresses = async (body) => {
    const {data} = await $addresses.post('', body);
    return data;
}