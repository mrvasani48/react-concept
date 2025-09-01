import Overview from '../pages/Overview';
import Stats from '../pages/Stats';
import ReactMemo from '../pages/ReactMemo';
import UseMemo from '../pages/UseMemo';
import UseCallback from '../pages/UseCallback';
import UseEffect from '../pages/UseEffect';
import WithThread from '../pages/WithThread';
import WithoutThread from '../pages/WithoutThread';

export const routes = [
  { path: '/overview', element: <Overview /> },
  { path: '/stats', element: <Stats /> },
  { path: '/react-memo', element: <ReactMemo /> },
  { path: '/use-memo', element: <UseMemo /> },
  { path: '/use-callback', element: <UseCallback /> },
  { path: '/use-effect', element: <UseEffect /> },
  { path: '/without-thread', element: <WithoutThread /> },
  { path: '/with-thread', element: <WithThread /> },
];
