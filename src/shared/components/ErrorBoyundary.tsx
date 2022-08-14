import React, { ReactNode } from "react";
import { withSuspense } from "shared/lib/hoc/withSuspence";
import { PagePreloader } from "./PagePreloader";

const ErrorPage = React.lazy(() => import("pages/ErrorPage/ErrorPage"));

export class ErrorBoundary extends React.Component<
  { children: ReactNode },
  { hasError: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return withSuspense(<ErrorPage />, <PagePreloader />);
    }

    return this.props.children;
  }
}
