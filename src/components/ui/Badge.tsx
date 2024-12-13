import ESCIcon from '../icons/ESCIcon';
import Button from './Button';

import classes from './Badge.module.scss';

// ----------------------------------------------------------------

interface IBadgeProps {
  label: string;
  onClick?: () => void;
}

const Badge: React.FC<IBadgeProps> = ({ label, onClick }) => {
  return (
    <div className={classes.badge}>
      <span className={classes.badge__text}>{label}</span>
      <Button type="button" className="btn--unstyled" onClick={onClick}>
        <ESCIcon />
      </Button>
    </div>
  );
};

export default Badge;
