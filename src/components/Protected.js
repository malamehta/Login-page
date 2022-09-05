// import React from "react";
// import { Link,  Route} from "react-router-dom";

// function ProtectedRoute({ component: Component, ...restOfProps }) {
//   const isAuthenticated = localStorage.getItem("isAuthenticated");
//   console.log("this", isAuthenticated);
// //   const navigate=useNavigate();

//   return (
//     <Route
//       {...restOfProps}
//       render={(props) =>
//         isAuthenticated ? <Component {...props} /> : <Link to="/" />
//       }
//     />
//   );
// }

// export default ProtectedRoute;