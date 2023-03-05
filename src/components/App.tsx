import { Route, Routes, Navigate } from 'react-router-dom';

import Home from 'pages/Home';
import News from 'pages/News';
import Profile from 'pages/Profile';

import Header from 'components/Header';

import { Paths } from 'constants/paths';

import 'assets/styles/reset.scss';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route element={<Home />} path={Paths.INDEX} index />
        <Route element={<News />} path={Paths.NEWS} />
        <Route element={<Profile />} path={Paths.PROFILE} />
        <Route path="*" element={<Navigate to={Paths.INDEX} />} />
      </Routes>
    </div>
  );
};

export default App;
