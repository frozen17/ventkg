import Card from "../components/card/Card";
import AboutUs from "../pages/aboutus/AboutUs";
import Home from "../pages/home/Home";
import NotFound from "../pages/notfound/NotFound";
import Object from "../pages/obj/Object";
import Offer from "../pages/offer/Offer";
import OurServices from "../pages/services/OurServices";
import { HOME_ROUTE, NOT_FOUND, ABOUT_ROUTE,OUR_SERVICE, CARD_ROUTE, OBJECTS_ROUTE, SERVICES_ROUTE } from "./Consts";

export const publicRoutes = [
    {
        path: HOME_ROUTE,
        element: <Home/>
    },
    {
        path: NOT_FOUND,
        element: <NotFound/>
    },
    {
        path: ABOUT_ROUTE,
        element: <AboutUs/>
    },
    {
        path: CARD_ROUTE,
        element: <Card/>
    },
    {
        path: OBJECTS_ROUTE,
        element: <Object/>
    },
    {
        path: SERVICES_ROUTE,
        element: <Offer/>
    }
]