import { QueryClient } from "@tanstack/react-query";
import Axios from "axios";

export const Fetcher = Axios.create({
  // baseURL: "https://prep-api.vercel.app/api/v1/",
  baseURL: "http://localhost:5000/api/v1/",
  headers: {
    Authorization: `bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjY0NmI3NjQ0YWJmOTJlMjA0M2FiZjViYSIsIm5hbWUiOiJTeWVkIiwiZW1haWwiOiJzeWVkQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiMTIzNDU2IiwiY3JlYXRlZEF0IjoiMjAyMy0wNS0yMlQxNDowMzo0OC4zNDlaIiwidXBkYXRlZEF0IjoiMjAyMy0wNS0yMlQxNDowMzo0OC4zNDlaIiwiX192IjowfSwiaWF0IjoxNjg3NzIyODI2LCJleHAiOjE2OTI3MjI4MjZ9.cwYK5BwEJ7cu7t9wUNXGv6N7js-6paffx6mBQU_CbFE`,
  },
});

export default new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // default: true
    },
  },
});
