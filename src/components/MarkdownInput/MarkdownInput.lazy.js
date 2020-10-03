import React, { lazy, Suspense } from 'react';

const LazyMarkdownInput = lazy(() => import('./MarkdownInput'));

const MarkdownInput = props => (
  <Suspense fallback={null}>
    <LazyMarkdownInput {...props} />
  </Suspense>
);

export default MarkdownInput;
