import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loader from './shared/components/Loader';
import SharedLayout from './modules/SharedLayout';

const MainPage = lazy(() => import('pages/MainPage'));
const GalleryPage = lazy(() => import('pages/GalleryPage'));
const SuccessPage = lazy(() => import('pages/SuccessPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage'));

function App() {
  return (
    <BrowserRouter basename="/">
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<MainPage />}></Route>
            <Route path="/gallery" element={<GalleryPage />}></Route>
          </Route>
          <Route path="/success" element={<SuccessPage />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
