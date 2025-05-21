import { Routes, Route } from 'react-router';
import HomePage from './pages/HomePage';
import CreateNotePage from './pages/CreateNotePage';
import NoteDetailPage from './pages/NoteDetailPage';

const App = () => {
  return (
    <div className='relative h-full w-full bg-slate-950'>
      <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_300px,#3e3e3e,transparent)]"></div>
      {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#ff8f00_100%)]"></div> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateNotePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>
  )
}

export default App