import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { useAppSelector, useAppDispatch } from 'hooks/redux';
import { authSlice } from 'redux/slices/auth';

import { Paths } from 'constants/paths';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setAuth } = authSlice.actions;

  useEffect(() => {
    const isAuthorizedStorage = localStorage.getItem('isAuthorized');
    if (isAuthorizedStorage) {
      dispatch(setAuth());
    } else {
      navigate(Paths.INDEX);
    }
  }, []);

  const isAuthorized = useAppSelector(state => state.auth.isAuthorized);

  return (
    <div className="wrapper">
      {isAuthorized && <h1 className="title">Profile</h1>}
    </div>
  );
};

export default Profile;
