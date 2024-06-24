import { QueryClientProvider } from "@tanstack/react-query";
import Router from "./shared/Router";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
