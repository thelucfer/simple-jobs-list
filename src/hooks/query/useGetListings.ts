import { useQuery } from '@tanstack/react-query';
import { getListings } from '@/api';
import { formatListing } from '@/lib';
import { ListingResponse } from '@/types';

export const useGetListings = (id?: number) =>
  useQuery(['listings'], {
    queryFn: getListings,
    select: (res: ListingResponse[]) =>
      !id ? res.map(formatListing) : res.map(formatListing).filter((listing) => listing.id === id),
    staleTime: Infinity,
  });
