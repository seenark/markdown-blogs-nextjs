import Link from "next/link";
import * as React from "react";
import Logo from "./logo";
import classes from './main-navigation.module.css'

interface IMainNavigationProps {}

const MainNavigation: React.FunctionComponent<IMainNavigationProps> = (
  props
) => {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            {" "}
            <Link href="/posts">Posts</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/contact">Contact</Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
