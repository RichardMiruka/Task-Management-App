// provider.tsx
'use client'
import { store } from "./store";
import { Provider } from "react-redux";

// Custom provider component
export function Providers({ children }: { children: React.ReactNode }) {
   return <Provider store={store}>{children}</Provider>;
 }