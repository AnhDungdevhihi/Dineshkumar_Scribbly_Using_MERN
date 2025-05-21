import { Routes, Route } from 'react-router'; 
import HomePage from './pages/HomePage';
import CreateNotePage from './pages/CreateNotePage';
import NoteDetailPage from './pages/NoteDetailPage';

const App = () => {
  return (
    <div className='relative h-full w-full bg-slate-950'>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_500px_at_50%_300px,#3e3e3e,transparent)]"></div>

      {/* Optional alternative gradient */}
      {/* <div className="absolute inset-0 z-0 h-full w-full items-center px-5 py-24 bg-[radial-gradient(125%_125%_at_50%_10%,#000_60%,#ff8f00_100%)]"></div> */}

      {/* Routes Layer */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create" element={<CreateNotePage />} />
          <Route path="/note/:id" element={<NoteDetailPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
