import Categories from '../components/Categories';
import NewsList from '../components/NewsList';
import { useLocation } from 'react-router-dom';
const NewsPage = () => {
  const location = useLocation(); 
  const category : string = (location.pathname).replace('/','') || 'all';
  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};
 
export default NewsPage;