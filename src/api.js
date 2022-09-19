/* This function takes an events array, then uses map to create a new array with only locations.
* It will also remove all duplicates by creating another new array using the spread operator and spreading a Set.
* The Set will remove all duplicates from the array.
*/

import axios from 'axios';
import { mockData } from './mock-data';

export const extractLocations = (events) => {
 let extractLocations = events.map((event) => event.location);
 let locations = [...new Set(extractLocations)];
 return locations;
};

export const getEvents = async () => {
  return mockData;
};

export const getAccessToken = async () => {
  const getAccessToken = localStorage.getItem('access_token');
  const tokenCheck = accessToken && (await checkToken(accessToken));

  if (!accessToken || tokenCheck.error) {
    await localStorage.removeItem("access_token");
    const searchParams = new URLSearchParams(window.location.search);
    const code = await searchParams.get("code");
    if (!code) {
      const results = await axios.get(
        "https://nzmmemps58.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url"
      );
      const { authUrl } = results.data;
      return (window.location.href = authUrl);
    }
    return code && getToken(code);
  }
  return accessToken;
}