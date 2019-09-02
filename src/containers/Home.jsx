
import React from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Loader from '../components/Loader';

import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';

const Home = () => {
  const initialState = useInitialState(API);
  // eslint-disable-next-line react/react-in-jsx-scope
  return initialState.length === 0 ? <Loader /> : (
    // eslint-disable-next-line react/react-in-jsx-scope
    <>
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title='Mi Lista'>
          <Carousel>
            {initialState.mylist.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />)}
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {initialState.originals.map((item) => <CarouselItem key={item.id} {...item} />,)}
        </Carousel>
      </Categories>
    </>
  );
};

export default Home;
