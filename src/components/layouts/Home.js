import React, { useEffect } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchCat } from '../../redux/categories/actionsCat';
// photos
import ele from '../../services/assets/electro.jpg';
import jewlery from '../../services/assets/jewlery.jpg';
import menw from '../../services/assets/menw.jpg';
import womenw from '../../services/assets/womenw.jpg';
//router
import { Link } from 'react-router-dom';
// styles
import {
  HomeContainer,
  ImgContainer,
  LinkContainer,
  ItemContainer,
} from '../../shared/HomeComponentStyled';
const Home = () => {
  const categories = useSelector((state) => state.categoriesState.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCat());
  }, []);

  const photosArray = [ele, jewlery, menw, womenw];

  return (
    <HomeContainer>
      {categories.length > 0
        ? categories.map((cat, idx) => {
            return (
              <ItemContainer key={idx}>
                <ImgContainer>
                  <img src={photosArray[idx]} alt={cat.title} />
                </ImgContainer>
                <LinkContainer>
                  <Link to={`/categories/${cat}`}>{cat}</Link>
                </LinkContainer>
              </ItemContainer>
            );
          })
        : null}
    </HomeContainer>
  );
};

export default Home;
