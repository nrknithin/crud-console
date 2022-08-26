import { AppContextProvider } from "./context/AppContext";
import AppRoute from "./routes/AppRoutes";

function App() {
  return (
    <AppContextProvider>
      <AppRoute />
    </AppContextProvider>
  );
}

export default App;
