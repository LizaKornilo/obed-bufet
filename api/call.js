import { axios } from "./default-axios.api";

export const sendRequestToCall = async (data) => {
    await axios.post('calls/order', data)
}