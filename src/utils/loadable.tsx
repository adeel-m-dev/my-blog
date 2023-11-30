import { Spinner } from "@material-tailwind/react";
import { lazy, Suspense } from "react";

const loadable = (
  importFunc: any,
  { fallback = null } = { fallback: null }
) => {
  const LazyComponent = lazy(importFunc);
  // import loading here
  return (props: any) => (
    <Suspense fallback={fallback ? fallback : <Loading />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default loadable;

const Loading = ({
  text,
  padding = 25,
}: {
  text?: string;
  padding?: number;
  size?: "large" | "small" | "default";
}) => {
  return (
    <div
      style={{
        paddingTop: padding,
        paddingBottom: padding,
        textAlign: "center",
      }}
    >
      {text && <p>{text}</p>}
      <Spinner />
    </div>
  );
};
