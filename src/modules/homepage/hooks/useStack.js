import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Fetcher } from "client";

export function useCreateStack() {
    const queryClient = useQueryClient();
    const createMutation = useMutation({
      mutationKey: ["createTech"],
      mutationFn: async (techname) => {
        const result = await Fetcher.post(`createTech`, {
          technology: techname,
          page: techname,
        })
          .then((response) => {
            console.log(response.data); // log the response data to the console
          })
          .catch((error) => {
            console.error(error); // log any errors to the console
          });
        console.log("Tech name", result);
  
        return result;
      },
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ["techData"] }),
    });
    return { createMutation };
  }