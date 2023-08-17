import parseHTML from 'html-react-parser';
import { Link, useParams } from 'react-router-dom';
import { Loader } from '../components/Loader';
import { useGetListings } from '../hooks/query/useGetListings';
import styles from './Listing.module.css';

export const Listing = () => {
  const { listingId } = useParams<{ listingId: string }>();

  const listings = useGetListings(Number(listingId));

  if (listings.isLoading) {
    return <Loader />;
  }

  const listing = listings.data![0];

  return (
    <article className={styles.wrapper}>
      <header className={styles.header}>
        <img src={listing.company.cover} alt={listing.company.name} className={styles.header__bg} />
        <h2 className={styles.header__heading}>{listing.title}</h2>
        <img
          src={listing.company.logo}
          alt={listing.company.name}
          className={styles.header__logo}
        />
      </header>

      <div className={styles.content}>
        <section className={styles.section}>
          <ul className={styles.detail_list}>
            <li className={styles.detail_item}>
              <strong>Company:</strong> {listing.company.name}
            </li>
            <li className={styles.detail_item}>
              <strong>Employment type:</strong> {listing.employmentType}
            </li>
            <li className={styles.detail_item}>
              <strong>Function:</strong> {listing.function}
            </li>
            <li className={styles.detail_item}>
              <strong>Experience:</strong> {listing.experience}
            </li>
            <li className={styles.detail_item}>
              <strong>Location:</strong> {listing.locations[0]}
            </li>
          </ul>
        </section>

        <section className={styles.section}>
          <h3 className={styles.section_title}>Description</h3>
          {parseHTML(listing.description)}
        </section>

        <section className={styles.section}>
          <h3 className={styles.section_title}>Skills</h3>
          {parseHTML(listing.skills)}
        </section>

        <a href={listing.urls.ad} target="_blank" rel="noopener noreferrer" className={styles.link}>
          see on website
        </a>
        <Link to="/" className={styles.link__home}>
          return to home
        </Link>
      </div>
    </article>
  );
};
