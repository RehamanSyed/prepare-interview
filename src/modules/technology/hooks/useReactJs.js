import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Fetcher } from "client";

export const useCreateQuestion = () => {
  const queryClient = useQueryClient();
  const createMutation = useMutation({
    mutationKey: ["createTech"],
    mutationFn: async (formData) => {
      console.log(formData);
      const result = await Fetcher.post("/createPost", formData);
      console.log("post result", result);
      return result;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["postData"] }),
  });

  return { createMutation };
};
