import BasicLayout from "../Layouts/BasicLayout";
import Home from "../pages/Home/Home";
import Medications from "../pages/Medications/Medications";
import Pets from "../pages/Pets/Pets";

export const ROUTES = {
  HOME: "/",
  PETS: "/pets",
  MEDICATIONS: "/medications",
};

export const routes = [
  {
    path: ROUTES.HOME,
    Component: Home,
    Layout: BasicLayout,
  },
  {
    path: ROUTES.PETS,
    Component: Pets,
    Layout: BasicLayout,
  },
  {
    path: ROUTES.MEDICATIONS,
    Component: Medications,
    Layout: BasicLayout,
  },
];

export const navigationBarLinks = [
  {
    path: ROUTES.PETS,
    title: "Pets",
  },
  {
    path: ROUTES.MEDICATIONS,
    title: "Medications",
  },
];
