import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import ErrorBoundary from "~/components/error-boundary/error-boundary";
import { BaseContent, BaseWrapper } from "~/pages/base/base.styles";

const Base: React.FC = () => {
  return (
    <BaseWrapper>
      <BaseContent>
        <ErrorBoundary>
          <Suspense fallback={<div>loading...</div>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </BaseContent>
    </BaseWrapper>
  );
};

export default Base;
