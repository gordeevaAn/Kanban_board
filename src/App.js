import { Wrapper } from "./components/wrapper/wrapper";
import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { Board } from "./components/board/board";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Card } from "./components/board/card-details/cardDetails";

const router = createBrowserRouter([
  { path: "/", element: <Board /> },
  {
    path: "/tasks/:cardId",
    element: <Card />,
  },
]);

function App() {
  return (
    <Wrapper>
      <Header />
      <main>
        <RouterProvider router={router} />
      </main>
      <Footer />
    </Wrapper>
  );
}

export default App;
