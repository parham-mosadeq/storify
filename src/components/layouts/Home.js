import React, { useEffect } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchCat } from '../../redux/categories/actionsCat';
// router
import { Link } from 'react-router-dom';
// photos
import ele from '../../services/assets/electro.jpg';
import jewlery from '../../services/assets/jewlery.jpg';
import menw from '../../services/assets/menw.jpg';
import womenw from '../../services/assets/womenw.jpg';

const Home = () => {
  const categories = useSelector((state) => state.categoriesState.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories.length > 0) {
      dispatch(fetchCat());
    }
  }, []);

  const photosArray = [ele, jewlery, menw, womenw];

  return (
    <main>
      <article>
        <h1>see all categories available</h1>

        {categories.length > 0 ? (
          categories.map((cat, idx) => {
            return (
              <div key={idx}>
                <Link to={`/categories/${cat}`}>
                  <img width={60} src={photosArray[idx]} alt='' />
                </Link>
                <div>
                  <Link to={`/categories/${cat}`}>{cat}</Link>
                </div>
              </div>
            );
          })
        ) : (
          <h1>loading....</h1>
        )}
      </article>
    </main>
  );
};

export default Home;
