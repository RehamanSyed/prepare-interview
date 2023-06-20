import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Fetcher } from "client";

export const useCreateQuestion = () => {
  const queryClient = useQueryClient();
  const createMutation = useMutation({
    mutationKey: ["createTech"],
    mutationFn: async (formData) => {
      const result = await Fetcher.post(`createReactPost`, formData);
      return result;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["techData"] }),
  });
  return { createMutation };
};
