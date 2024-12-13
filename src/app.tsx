import { createBrowserRouter, RouterProvider } from "react-router"

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello Worl!</div>
  },
  {
    path: "/teste",
    element: <div>Teste</div>
  },
])

export function App() {
  return <RouterProvider router={router} />
}

