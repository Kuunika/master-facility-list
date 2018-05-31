import axios from "axios";
import settings from "../settings";
const token = "Tgbq12qlYEhOxno9fGVqyEyLLj3mtMPJFCIQPiJO5wgNRgSC4pO6p8eax8TYyZgR"; //from sessionStorage

export default function postFormData(data, resource, method, actionType, endpoint = "") {
  const END_POINT = `${settings.hostname}/api/`;

  const headers = {
    Authorization: token
  };

  const url = `${END_POINT}${resource}/${endpoint}`;
  const response = axios({ method, url, data, headers });

  return {
    type: actionType,
    payload: response
  };
}
