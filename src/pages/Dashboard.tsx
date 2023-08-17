import { useGetListings } from '@/hooks/query/useGetListings';
import { ListingCard } from '../components/ListingCard';
import { Loader } from '../components/Loader';
import styles from './Dashboard.module.css';

export const Dashboard = () => {
  const listings = useGetListings();

  if (listings.isLoading) {
    return <Loader />;
  }

  return (
    <ul className={styles.list_wrapper}>
      {listings.data?.map((listing) => <ListingCard key={listing.id} listing={listing} />)}
    </ul>
  );
};
