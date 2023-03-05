import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';

import Loader from 'components/Loader';
import NewsCard from 'components/NewsCard';

import { useAppDispatch, useAppSelector } from 'hooks/redux';

import { fetchNews } from 'redux/slices/news/ActionCreators';

import './index.scss';

const News = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading, error } = useAppSelector(state => state.news);

  const [isLimitPosts, setIsLimitPosts] = useState(true);

  useEffect(() => {
    dispatch(fetchNews(isLimitPosts));
  }, [isLimitPosts]);

  return (
    <div className="wrapper">
      {isLoading && <Loader />}
      {!!items.length && (
        <>
          {isLimitPosts && (
            <div className="loadMore">
              <Button
                variant="contained"
                color="primary"
                onClick={() => setIsLimitPosts(false)}
              >
                Load More
              </Button>
            </div>
          )}
          <ul className="newsList">
            {items?.map(item => {
              return (
                <NewsCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  text={item.body}
                />
              );
            })}
          </ul>
        </>
      )}
      {error && <h2 className="error">{error}</h2>}
    </div>
  );
};

export default News;
