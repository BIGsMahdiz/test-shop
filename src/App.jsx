import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Router from "./routes/Router";
import Layout from "@/layouts/Layout";
import defaultOptions from "./configs/reactQuery";
import Filters from "./contexts/Filters";

function App() {
  const queryClient = new QueryClient({ defaultOptions });

  return (
    <QueryClientProvider client={queryClient}>
      <Filters>
        <Layout>
          <Router />
        </Layout>
      </Filters>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
