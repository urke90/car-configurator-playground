import ESCIcon from '../icons/ESCIcon';

import classes from './Badge.module.scss';
import Button from './Button';

// ----------------------------------------------------------------

interface IBadgeProps {
  label: string;
  onClick?: () => void;
}

const Badge: React.FC<IBadgeProps> = ({ label, onClick }) => {
  return (
    <div className={classes.badge}>
      <span className={classes.badge__text}>{label}</span>
      <Button className="btn--unstyled" onClick={onClick}>
        <ESCIcon />
      </Button>
    </div>
  );
};

export default Badge;
