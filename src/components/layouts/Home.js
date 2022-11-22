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

const Home = () => {
  const categories = useSelector((state) => state.categoriesState.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCat());
  }, []);

  const photosArray = [ele, jewlery, menw, womenw];

  return (
    <div>
      {categories.length > 0
        ? categories.map((cat, idx) => {
            return (
              <div key={idx}>
                <img width={60} src={photosArray[idx]} alt={cat.title} />
                <div>
                  <Link to={`/categories/${cat}`}>{cat}</Link>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default Home;
