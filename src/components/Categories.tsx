import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
const Categories = () => {
  return (
    <CategoriesBlock>
      <Category>
        <>
        <li>
          <NavLink to="/" className={({isActive}: {isActive: boolean}) => (isActive ? "active" : 'none')} style={{ textDecoration: 'none'}}>전체보기</NavLink>
        </li>
        <li>
          <NavLink to="/business" className={({isActive} : {isActive: boolean}) => (isActive ? "active" : 'none')} style={{ textDecoration: 'none'}}>비즈니스</NavLink>
        </li>
        <li>
          <NavLink to="/entertainment" className={({isActive} : {isActive: boolean}) => (isActive ? "active" : 'none')} style={{ textDecoration: 'none'}}>엔터테이먼트</NavLink>
        </li>
        <li>
          <NavLink to="/health" className={({isActive} : {isActive: boolean}) => (isActive ? "active" : 'none')} style={{ textDecoration: 'none'}}>건강</NavLink>
        </li>
        <li>
          <NavLink to="/science" className={({isActive} : {isActive: boolean}) => (isActive ? "active" : 'none')} style={{ textDecoration: 'none'}}>과학</NavLink>
        </li>
        <li>
          <NavLink to="/sport" className={({isActive} : {isActive: boolean}) => (isActive ? "active" : 'none')} style={{ textDecoration: 'none'}}>스포츠</NavLink>
        </li>
        <li>
          <NavLink to="/technology" className={({isActive} : {isActive: boolean}) => (isActive ? "active" : 'none')}  style={{ textDecoration: 'none'}}>기술</NavLink>
        </li>
        </>
      </Category>
    </CategoriesBlock>
  );
};

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 768px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }

`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  padding-bottom: 0.25rem;
  padding-left: 0;
  text-decoration: none;
  li:not(:first-of-type) {
    padding-left: 1rem;
  }
  li {
    white-space: pre;
    font-size: 1.125rem;
    list-style-type: none;
  }
    
  
  li a:hover {
    color: #3bc9db;
  }
  a {
    color: black;
  }
  a.active {
    font-weight: 600; 
    border-bottom: 2px solid #22b8cf; 
    color: #22b8cf;
    &:hover{
      color: #3bc9db;
    }
  }
  & + & {
    margin-left: 1rem;
  }
`;

export default Categories;