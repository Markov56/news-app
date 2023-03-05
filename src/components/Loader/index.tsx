import CircularProgress from '@material-ui/core/CircularProgress';

import './index.scss';

const Loader = () => {
  return (
    <div className="loader">
      <CircularProgress size={100} />
    </div>
  );
};

export default Loader;
