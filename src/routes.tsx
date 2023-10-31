import { ROUTES } from "./utils/consts.ts"
import { RootLayout } from "./layout/RootLayout.tsx";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.tsx";
import { HomePage } from "./pages/HomePage/HomePage.tsx";
import { FavoritesPage } from "./pages/FavoritesPage/FavoritesPage.tsx";
import { AuthPage } from "./pages/AuthPage/AuthPage.tsx";
import { ShoppingCartPage } from "./pages/ShoppingCartPage/ShoppingCartPage.tsx";
import { ConfirmEmailPage } from "./pages/ConfirmEmailPage/ConfirmEmailPage.tsx";
import { LogInForm } from "./components/AuthForm/logInForm.tsx";
import { RegistrationForm } from "./components/AuthForm/RegistrationForm.tsx";


export const publicRoutes = [
    {
        path: ROUTES.HOME_PAGE,
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
              index: true,
              element: <HomePage />
            },
            {
                path: ROUTES.FAVORITES_PAGE,
                element: <FavoritesPage />
            },
            {
                path: ROUTES.AUTH_PAGE,
                element: <AuthPage />,
                children: [
                    {
                        index: true,
                        element: <LogInForm/>
                    },
                    {
                        path: 'registration',
                        element: <RegistrationForm />
                    }
                ],
            },
            {
                path: ROUTES.SHOPPING_CART_PAGE,
                element: <ShoppingCartPage />
            },
            {
                path: ROUTES.CONFIRM_REG_PAGE,
                element: <ConfirmEmailPage />
            }
        ]
    }
]
