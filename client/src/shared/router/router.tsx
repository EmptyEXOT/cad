import { AppPage } from "@/pages/AppPage";
import { ErrorPage } from "@/pages/ErrorPage";
import { IndevPage } from "@/pages/IndevPage";
import { MainPage } from "@/pages/MainPage";
import { Root } from "@/root";
import { Loader } from "@/shared/ui/Loader/ui/Loader";
import { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: '/',
        errorElement:
            <Root>
                <Suspense fallback={<Loader/>}>
                    <ErrorPage/>
                </Suspense>
            </Root>,
        element: <Root/>,
        children: [
            {
                index: true,
                element:
                    <Suspense fallback={<Loader/>}>
                        <MainPage/>
                    </Suspense>,
            },
            {
                path: 'app',
                element:
                    <Suspense fallback={<Loader/>}>
                        <AppPage/>
                    </Suspense>,
            },
            {
                path: 'news',
                element:
                    <Suspense fallback={<Loader/>}>
                        <IndevPage/>
                    </Suspense>,
            },
            {
                path: 'auth',
                children: [
                    {
                        index: true,
                        element:
                            <Suspense fallback={<Loader/>}>
                                <IndevPage/>
                            </Suspense>
                    },
                    {
                        path: 'register',
                        element:
                            <Suspense fallback={<Loader/>}>
                                <IndevPage/>
                            </Suspense>
                    },
                    {
                        path: 'recover',
                        element:
                            <Suspense fallback={<Loader/>}>
                                <IndevPage/>
                            </Suspense>
                    },
                    {
                        path: '*',
                        element:
                            <Navigate to={'/auth'}/>,
                    },
                ]
            }
        ],
    },
    {
        path: '*',
        element:
            <Navigate to={'/'}/>,
    },
])