import { useState } from "react";
import { Navigate, useRoutes } from "react-router-dom";

import Homepage from "@/pages/Homepage";
import Page404 from "@/pages/404";
import Restaurant from "@/pages/Restaurant";
import CartOrder from "@/pages/CardOrder";

export default function Routes() {
  const [user, setUser] = useState(true);

  // Router Protected
  function ProtectedRoute({ user, children }) {
    if (!user) {
      return <Navigate to="/login" replace />;
    }

    return children;
  }

  const element = useRoutes([
    { path: "/", element: <Homepage /> },
    {
      path: "/restaurant/:id",
      element: (
        <ProtectedRoute user={user}>
          <Restaurant />
        </ProtectedRoute>
      ),
    },
    {
      path: "/restaurant/cart-order",
      element: (
        <ProtectedRoute user={user}>
          <CartOrder />
        </ProtectedRoute>
      ),
    },
    { path: "*", element: <Page404 /> },
    // {
    //   path: "/posts",
    //   element: <Posts />,
    //   children: [
    //     { index: true, element: <PostLists /> },
    //     { path: ":slug", element: <Post /> },
    //   ],
    // },
  ]);
  return element;
}
