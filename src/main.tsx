import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Permitimos que toda nuestra aplicación pueda acceder
// a la store y así hacer las acciones.
// Desde cualquier componentes, podremos leer la store
import { store } from "./store/index.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
