import axios from "axios";
import settings from '../settings';

export default () => {
    const END_POINT = `${settings.hostname}/api/`;
    const RESOURCE = `RegulatoryStatuses/`;

    const URL = `${END_POINT}${RESOURCE}`;
    const request = axios.get(URL);
    return {
        type: "FETCH_REGULATORY_STATUSES",
        payload: request
    };
};