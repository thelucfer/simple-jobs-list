import { Link } from 'react-router-dom';
import { Listing } from '../types';
import styles from './ListingCard.module.css';

export const ListingCard = ({ listing }: { listing: Listing }) => (
  <li key={listing.id} className={styles.listing__wrapper}>
    <h2 className={styles.listing__heading}>
      <span className={styles.listing__title}>{listing.title}</span>
      <span className={styles.listing__company_name}>@ {listing.company.name}</span>
    </h2>

    <ul className={styles.details_list}>
      <li className={styles.details_list__item}>{listing.function}</li>
      <li className={styles.details_list__item}>
        {listing.employmentType} • {listing.experience}
      </li>
      <li className={styles.details_list__item}>{listing.locations[0]}</li>
    </ul>

    <Link to={`listing/${listing.id}`} className={styles.listing__link}>
      <span>View Details</span>
      <span className={styles.link_arrow}>&gt;</span>
    </Link>
  </li>
);
