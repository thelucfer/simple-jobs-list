import { RouteObject } from 'react-router-dom';
import { Layout } from '../Layout';
import { Dashboard } from '../pages/Dashboard';
import { Listing } from '../pages/Listing';

export const routes: RouteObject[] = [
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: 'listing/:listingId', Component: Listing },
    ],
  },
];
