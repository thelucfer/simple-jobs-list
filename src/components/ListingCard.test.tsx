import { formatListing } from '@/lib';
import { listingsMock } from '@/test/mocks';
import { render, screen } from '@/test/utils';
import { ListingCard } from './ListingCard';

describe('ListingCard', () => {
  it('should render with a link to the listing page with the correct id', async () => {
    render(<ListingCard listing={formatListing(listingsMock[0])} />);

    const link = screen.findByRole('link');

    expect(link).toHaveAttribute('href', 'listing/1');
  });
});
