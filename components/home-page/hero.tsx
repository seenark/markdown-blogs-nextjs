import Image from 'next/image';
import * as React from 'react';
import classes from './hero.module.css'


interface IHeroProps {
}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
      <section className={classes.hero}>
          <div className={classes.image}>
              <Image src="/image/site/Ralf-Rangnick.jpeg" alt='HadesGod' width={300} height={300}/>
          </div>
          <h1>I am HadesGod</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, dicta?</p>
      </section>
  )
};

export default Hero;
