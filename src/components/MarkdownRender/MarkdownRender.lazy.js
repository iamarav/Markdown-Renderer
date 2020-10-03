import React, { lazy, Suspense } from 'react';

const LazyMarkdownRender = lazy(() => import('./MarkdownRender'));

const MarkdownRender = props => (
  <Suspense fallback={null}>
    <LazyMarkdownRender {...props} />
  </Suspense>
);

export default MarkdownRender;
