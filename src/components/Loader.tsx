import Lottie from 'lottie-react';
import loadingHourglass from '@/assets/animations/loading-hourglass.json';
import styles from './Loader.module.css';

export const Loader = () => <Lottie animationData={loadingHourglass} className={styles.loader} />;
