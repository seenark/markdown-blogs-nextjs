import * as React from 'react';
import classes from './logo.module.css'
interface ILogoProps {
}

const Logo: React.FunctionComponent<ILogoProps> = (props) => {
  return (
      <div className={classes.logo}>HadesGod next blog</div>
  )
};

export default Logo;
