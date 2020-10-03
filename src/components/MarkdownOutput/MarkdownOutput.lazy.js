import React, { lazy, Suspense } from 'react';

const LazyMarkdownOutput = lazy(() => import('./MarkdownOutput'));

const MarkdownOutput = props => (
  <Suspense fallback={null}>
    <LazyMarkdownOutput {...props} />
  </Suspense>
);

export default MarkdownOutput;
