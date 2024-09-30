"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { Header, Aside, Main } from "@/app/components";
import { Stack } from "@mui/material";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <Stack direction="row">
          <Aside />
          <Main>
            <QueryClientProvider client={queryClient}>
              {children}
              <ReactQueryDevtools initialIsOpen={false} />
            </QueryClientProvider>
          </Main>
        </Stack>
      </body>
    </html>
  );
}
