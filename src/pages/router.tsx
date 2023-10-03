import { Layout } from "antd";
import Home from "components/home";
import AppFooter from "components/footer";
import AppHeader from "components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "components/detail";
import { AppRouter, MenuOptionProp } from "models/model";
import SignIn from "pages/signin";
import { hideHeaderList, ROUTES } from "common/constants";
import SignUp from "pages/signup";
import TestView from "components/test-view";
import ForgotPassword from "components/forgot-password";
import UserOnboarding from "pages/userOnboarding";
import PetOnboarding from "./petOnboarding";

const Landing = () => {
  const router: AppRouter[] = [
    { uri: ROUTES.HOME, to: <Home /> },
    { uri: ROUTES.DETAIL, to: <Detail /> },
    { uri: ROUTES.SIGNIN, to: <SignIn /> },
    { uri: ROUTES.SIGNUP, to: <SignUp /> },
    { uri: ROUTES.TESTVIEW, to: <TestView /> },
    { uri: ROUTES.FORGOT_PASSWORD, to: <ForgotPassword /> },
    { uri: ROUTES.USER_ONBOARDING, to: <UserOnboarding /> },
    { uri: ROUTES.PET_ONBOARDING, to: <PetOnboarding /> },
  ].map((r, i) => {
    return {
      ...r,
      to: (
        <>
          {!hideHeaderList.has(r.uri) && <AppHeader />}
          {r.to}
          <AppFooter hideHeader={hideHeaderList.has(r.uri)} />
        </>
      ),
    };
  });
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          {router.map((r, i) => (
            <Route key={i} path={r.uri} element={r.to} />
          ))}
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default Landing;
