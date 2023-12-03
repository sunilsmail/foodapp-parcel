import { lazy } from 'react';
import { createBrowserRouter } from "react-router-dom";
import RestaurantList from '../src/feature/restaurant/RestaurantList';
import withSuspense from './components/withSuspense';
import Layout from "./Layout";

const Products = lazy(() => import('./feature/product/ProductList'));
const SuspenseProd = withSuspense(Products);

const Todo = lazy(() => import('./feature/todo/Todo'));
const SuspenseTodo = withSuspense(Todo);

const Quotes = lazy(() => import('./feature/quotes/Quotes'));
const SuspenseQuotes = withSuspense(Quotes);

const Cart = lazy(() => import('./feature/cart/Cart'));
const SuspenseCart = withSuspense(Cart);

const Users = lazy(() => import('./feature/users/Users'));
const SuspenseUser = withSuspense(Users);

const Reasons = lazy(() => import('./feature/appointment/Reasons'));
const SuspenseReasons = withSuspense(Reasons);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <h1>Page not found</h1>,
        // loader: async () => {
        //     return fetch('https://dummyjson.com/products/categories');
        // },
        children: [
            {
                path: '/',
                element: <RestaurantList />,
            },
            {
                path: '/products',
                element: <SuspenseProd />
            },
            {
                path: '/quotes',
                element: <SuspenseQuotes />,
            },
            {
                path: '/todo',
                element: <SuspenseTodo />,
            },
            {
                path: '/cart',
                element: <SuspenseCart />,
            },
            {
                path: '/users',
                element: <SuspenseUser />,
            },
            {
                path: '/reasons',
                element: <SuspenseReasons />,
            },
        ]
    }
]);

export default router;