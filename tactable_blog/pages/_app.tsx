// Created by Curtis Spence Sep 8, 2022

import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>
}

export default MyApp
