import { QueryClient } from "@tanstack/react-query";
import Axios from "axios";
import { useSession } from "next-auth/react";

export const Fetcher = Axios.create({
  // baseURL: "https://prep-api.vercel.app/api/v1/",
  baseURL: "http://localhost:5000/api/v1/",
});

export default new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});
