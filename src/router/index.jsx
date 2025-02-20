import { Route, Routes } from "react-router-dom";
import { BaseLayout } from "../components/public";
import {
  AboutAs,
  Conventions,
  Education,
  FuneralFund,
  Home,
  MilitaryCircle,
  Page404,
  PoliciesAndPrivacy,
  ServiceSocial,
} from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <BaseLayout>
            <Home />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/education"
        element={
          <BaseLayout>
            <Education />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/conventions"
        element={
          <BaseLayout>
            <Conventions />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/funeral-fund"
        element={
          <BaseLayout>
            <FuneralFund />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/social-service"
        element={
          <BaseLayout>
            <ServiceSocial />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/military-circle"
        element={
          <BaseLayout>
            <MilitaryCircle />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/about-as"
        element={
          <BaseLayout>
            <AboutAs />
          </BaseLayout>
        }
      />
      <Route
        exact
        path="/policies-and-privacy"
        element={
          <BaseLayout>
            <PoliciesAndPrivacy />
          </BaseLayout>
        }
      />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
