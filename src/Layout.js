import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import UserContext from "./config/QuoteProvider";
import { getAllProductsSelector, productActions } from "./store/slice/product-slice";

const Layout = () => {
    const [username, setUserName] = useState('sunil');
    return (
        <>
            <UserContext.Provider value={{ username, setUserName }}>
                <Header />
                <Outlet />
                <Footer />
            </UserContext.Provider>
        </>
    );
}

export default Layout;