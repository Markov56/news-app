import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { AppBar, Toolbar, MenuItem, Button } from '@material-ui/core';

import LoginForm from 'components/LoginForm';
import LanguageSelector from 'components/LanguageSelector';

import { Paths } from 'constants/paths';

import './index.scss';

const Header = () => {
  const { t } = useTranslation();

  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const handleLoginFormOpen = () => {
    setIsLoginFormOpen(true);
  };

  const handleLoginFormClose = () => {
    setIsLoginFormOpen(false);
  };

  return (
    <>
      <AppBar position="sticky" className="header">
        <Toolbar className="toolbar">
          <div className="left">
            <Link to={Paths.INDEX} className="link">
              <MenuItem>{t('menu.home')}</MenuItem>
            </Link>
            <Link to={Paths.NEWS} className="link">
              <MenuItem>{t('menu.news')}</MenuItem>
            </Link>
            <Link to={Paths.PROFILE} className="link">
              <MenuItem>{t('menu.profile')}</MenuItem>
            </Link>
          </div>
          <div className="right">
            <LanguageSelector />
            <Button onClick={handleLoginFormOpen} color="inherit">
              Login
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <LoginForm onClose={handleLoginFormClose} isOpen={isLoginFormOpen} />
    </>
  );
};

export default Header;
