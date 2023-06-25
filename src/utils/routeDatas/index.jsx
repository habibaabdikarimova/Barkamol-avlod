import { Navigate } from "react-router-dom";
import NotFound from "../../NotFound";
import Home from "../../Pages/home";
import Direction from "../../Pages/school/Direction";
import AboutSchool from "../../Pages/school/AboutSchool";
import Fotos from "../../Pages/InformationServic/Fotos";
import Videos from "../../Pages/InformationServic/Videos";
import TrainingFiles from "../../Pages/TrainingFiles";
import SchoolSystem from "../../Pages/school/SchoolSystem";
import AnotherEmployee from "../../Pages/Activity/AnotherEmployee";
import CircleDirection from "../../Pages/Activity/CircleDirection";
import Decision1 from "../../Pages/Documents/Decision1";
import Decision2 from "../../Pages/Documents/Decision2";
import TrainingSinglePage from "../../Pages/TrainingFiles/TrainingSinglepage";
import News from "../../Pages/News";



export const routeConfig = [
  {
    id: "1",
    path: "/home",
    element: <Home />,
  },
  // documents
  {
    id: "2",
    path: "/decision1",
    element: <Decision1 />,
  },
  {
    id: "3",
    path: "/decision2",
    element: <Decision2 />,
  },
  {
    id: "4",
    path: "/trainingfiles",
    element: <TrainingFiles />,
  },
  // activity
  {
    id: "5",
    path: "/anotheremployee",
    element: <AnotherEmployee />,
  },
  {
    id: "6",
    path: "/circledirection",
    element: <CircleDirection />,
  },
// Aboutpage
  {
    id: "7",
    path: "/direction",
    element: <Direction />,
  }, {
    id: "8",
    path: "/aboutschool",
    element: <AboutSchool />,
  },
  {
    id: "9",
    path: "/schoolsystem",
    element: <SchoolSystem />,
  },
  {
    id: "10",
    path: "/trainingsinglepage",
    element: <TrainingSinglePage />,
  },
  // Information
  {
    id: "11",
    path: "/fotos",
    element: <Fotos />,
  },
  {
    id: "12",
    path: "/videos",
    element: <Videos />,
  },
  {
    id: "12",
    path: "/news",
    element: <News />,
  },
  {
    id: "4",
    path: "/not-found",
    element: <NotFound />,
  },
  {
    id: "-1",
    path: "/",
    element: <Navigate to={"/home"} />,
  }, 
  {
    id: "-2",
    path: "*",
    element: <Navigate to={"/not-found"} />,
  },
];