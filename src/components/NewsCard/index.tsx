import { Card, CardContent, Typography } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import Loader from 'components/Loader';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { deleteOneNews } from 'redux/slices/news/ActionCreators';

import './index.scss';

type Props = {
  id: number;
  title: string;
  text: string;
};

const NewsItem = ({ id, title, text }: Props) => {
  const dispatch = useAppDispatch();

  const { isLoading, error } = useAppSelector(state => state.news);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && !error && (
        <Card className="card">
          <CardContent>
            <div className="top">
              <Typography variant="h5" component="h2">
                {title}
              </Typography>
              <DeleteIcon onClick={() => dispatch(deleteOneNews(id))} />
            </div>

            <Typography color="textSecondary" gutterBottom>
              {id}
            </Typography>
            <Typography variant="body2" component="p">
              {text}
            </Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default NewsItem;
