import { Gate, useGate } from "effector-react";
import React, { useState } from "react";
import { ReactNode } from "react";
import { PagePreloader } from "shared/components/PagePreloader";
import { withSuspense } from "shared/lib/hoc/withSuspence";

const ErrorPage = React.lazy(() => import("pages/ErrorPage/ErrorPage"));
const NotFoundPage = React.lazy(
  () => import("pages/NotFoundPage/NotFoundPage")
);

export const ManualErrorBoundary = ({
  children,
  gate,
}: {
  gate: Gate<{
    notFoundHandler: () => void;
    serverErrorHandler: () => void;
  }>;
  children: ReactNode;
}) => {
  const [isNotFound, setNotFound] = useState(false);
  const [isServerError, setServerError] = useState(false);

  useGate(gate, {
    notFoundHandler: () => {
      setNotFound(true);
    },
    serverErrorHandler: () => {
      setServerError(true);
    },
  });

  if (isNotFound) {
    return withSuspense(<NotFoundPage />, <PagePreloader />);
  }

  if (isServerError) {
    return withSuspense(<ErrorPage />, <PagePreloader />);
  }

  return <>{children}</>;
};
