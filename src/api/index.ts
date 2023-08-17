import { ListingResponse } from '../types';

export const getListings = async (): Promise<ListingResponse[]> => {
  const response = await fetch(
    'https://feed.jobylon.com/feeds/7d7e6fd12c614aa5af3624b06f7a74b8/?format=json',
  );
  const data = await response.json();

  return data;
};
