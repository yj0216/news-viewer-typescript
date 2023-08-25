import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

const App = () => {
  return (
  <Font>
    <Routes>
      <Route path="/:category?" element={<NewsPage />}/>
    </Routes>
  </Font>  
  );
};

const Font = styled.div`
   font-family:'default';
`


export default App;