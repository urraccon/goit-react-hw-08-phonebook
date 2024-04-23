import PropTypes from 'prop-types';
import styles from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
};
