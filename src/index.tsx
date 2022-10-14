import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import "./assets/css/global.css";
import App from "./App";
import { StoreProvider } from "./utils/contexts";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
            <StoreProvider>
                <App />
            </StoreProvider>
        </QueryClientProvider>
    </BrowserRouter>
);
