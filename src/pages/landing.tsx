import { Layout } from "antd";
import Home from "components/home";
import AppFooter from "components/footer";
import AppHeader from "components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "components/detail";
import { AppRouter, MenuOptionProp } from "models/model";
import SignIn from "components/signin";
import { hideHeaderList, ROUTES } from "common/constants";
import { useState } from "react";

const Landing = () => {
  const navigate=(uri:string|undefined)=>{
    if (uri)window.location.href=uri
  }
  const menuSet:MenuOptionProp[]=[{
    title:'Become a seller',
  },{
    title:'Sign In',
    uri:ROUTES.SIGNIN,
  },{
    title:'Sign Up',
    uri:ROUTES.SIGNUP,
  }].map(each=>{return {...each,clickHandler:navigate}})
  
  const router:AppRouter[]=[
    {uri:ROUTES.HOME,to:<Home/>},
    {uri:ROUTES.DETAIL,to:<Detail/>},
    {uri:ROUTES.SIGNIN,to:<SignIn/>},
  ].map(r=>{return {...r,to:<>
  {!hideHeaderList.has(r.uri)&& <AppHeader menuList={menuSet}/>}
    {r.to}
  <AppFooter hideHeader={hideHeaderList.has(r.uri)} />
  </>}})
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
        {router.map(r=><Route path={r.uri} element={r.to}/>)}
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default Landing;
