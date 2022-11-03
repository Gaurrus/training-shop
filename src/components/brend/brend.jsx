import { PropTypes } from 'prop-types';

import './brend.scss';

export const Brend = ({ src }) => <img src={src} alt='brend-img' />;

Brend.propTypes = {
  src: PropTypes.string.isRequired,
};
