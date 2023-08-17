import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import * as Api from '@/api';
import { formatListing } from '@/lib';
import { listingsMock } from '@/test/mocks';
import { renderHook, waitFor } from '@/test/utils';
import { useGetListings } from './useGetListings';

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useGetListings', () => {
  vi.spyOn(Api, 'getListings').mockImplementation(async () => Promise.resolve(listingsMock));

  it('should return all listings when not given a specific id', async () => {
    const { result } = renderHook(() => useGetListings(), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());

    expect(result.current.data).toEqual(listingsMock.map(formatListing));
  });

  it('should return only the selected listing when given a specific id', async () => {
    const { result } = renderHook(() => useGetListings(1), { wrapper });

    await waitFor(() => expect(result.current.isSuccess).toBeTruthy());

    expect(result.current.data).toEqual([formatListing(listingsMock[0])]);
  });
});
