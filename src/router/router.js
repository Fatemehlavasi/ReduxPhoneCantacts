import { createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import Formpage from "../pages/Formpage"
import ContactSinglePage from "../pages/ContactSinglePage";
import Layout from "../Layout/Layout";



 const router = createBrowserRouter([
    {
      path: "/",
      element:  <Home />
    },

    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: "/AddContact",
          element:  <Formpage />
        },
    
        {
          path: "/updateContact/:ContactId",
          element: <Formpage/>,
        },
    
        {
          path:"/Contacts/:ContactId",
          element: <ContactSinglePage />
        },
      ]
  }
    
  ]);

  export default router











