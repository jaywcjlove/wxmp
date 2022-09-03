import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/home';
import { EditorPage } from './pages/theme/editor';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/editor/theme" element={<EditorPage />} />
      </Route>
    </Routes>
  );
}
