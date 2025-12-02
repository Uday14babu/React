import React, { Suspense, lazy } from 'react';

const LazyComponent=lazy(()=>import('./LazyComponent'));

function App(){
  return (
    <div>
      <h2>My Application Component</h2>
      <Suspense fallback={<div>Loading Lazy Component...</div>}>
      <LazyComponent/>
      </Suspense>
    </div>
  );
}
export default App;