"use client";
import { theme } from "@/lib/theme/theme";
import { store } from "@/redux/store";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </Provider>
  );
};

export default Providers;
