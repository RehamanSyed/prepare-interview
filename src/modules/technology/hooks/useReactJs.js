import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Fetcher } from "client";
import { useSession } from "next-auth/react";

export const useCreateQuestion = () => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const createMutation = useMutation({
    mutationKey: ["createTech"],
    mutationFn: async (formData) => {
      console.log(formData);
      const result = await Fetcher.post("/createPost", formData, {
        headers: {
          Authorization: `bearer ${session.user.token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("post result", result);
      return result;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["postData"] }),
  });

  return { createMutation };
};
