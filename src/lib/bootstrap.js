"use client"
import dynamic from 'next/dynamic';

const NoSSRBootstrap = dynamic(
  () =>
    import('react').then((mod) => {
      return () => {
        mod.useEffect(() => {
          import('bootstrap/dist/js/bootstrap.bundle.min.js');
        }, []);
        return null;
      };
    }),
  { ssr: false }
);

export default NoSSRBootstrap;
