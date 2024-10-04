import MainNavigation from "../components/MainNavigation";
import classes from './ErrorPage.module.css'
export default function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <div className={classes.maindiv}>
        <h3>OOPS! PAGE NOT FOUND</h3>
        <h1>404</h1>
        <h2>WE ARE SORRY, BUT THE PAGE</h2>
        <h2>YOU REQUESTED WAS NOT FOUND</h2>
      </div>
    </>
  );
}
