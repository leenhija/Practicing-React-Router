import MainNavigationBar from "../components/MainNavigationBar";

export default function ErrorPage() {
  return (
    <>
      <MainNavigationBar />
      <main>
        <h1>An Error occurred!</h1>
        <p>Could not find this page</p>
      </main>
    </>
  );
}
