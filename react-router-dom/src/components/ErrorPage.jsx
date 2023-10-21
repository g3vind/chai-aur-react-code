import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      id="error-page"
      className="text-center p-4 text-3xl font-extrabold"
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <img
        className="p-20"
        src="https://cdn.vectorstock.com/i/preview-1x/19/23/page-not-found-error-404-template-vector-14121923.webp"
        alt="error image"
      />
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
