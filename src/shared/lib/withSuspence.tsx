import { ReactElement, Suspense } from "react";

export function withSuspense(
  component: JSX.Element,
  fallback: React.SuspenseProps["fallback"] = undefined
) {
  return <Suspense fallback={fallback}>{component}</Suspense>;
}
