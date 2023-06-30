import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Fetcher } from "client";
import { useSession } from "next-auth/react";

export const useAllPost = ({ tid, uid }) => {
  const { data: session } = useSession();
  const { isLoading, error, data } = useQuery({
    queryKey: ["postData"],
    queryFn: async () =>
      await Fetcher.get("/allPost", {
        params: { techId: tid, userId: uid },
        headers: {
          Authorization: `bearer ${session.user.token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.data)
        .catch((err) => console.log(err)),
  });

  return { data, isLoading, error };
};

export const useCreatePost = () => {
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
export const usePostById = () => {
  const { data: session } = useSession();
  const { isLoading, error, data } = useQuery({
    queryKey: ["postData"],
    queryFn: async () =>
      await Fetcher.get("/getPostbyId/643c73b7623c49aa7b36723e", {
        headers: {
          Authorization: `bearer ${session.user.token}`,
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.data)
        .catch((err) => console.log(err)),
  });

  return { data };
};
export const useEditPost = () => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const editMutation = useMutation({
    mutationKey: ["editTech"],
    mutationFn: async (id) => {
      console.log(id);
      const result = await Fetcher.post(`/updatePost/${id}`, {
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

  return { editMutation };
};
export const useDeletePost = () => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationKey: ["deleteTech"],
    mutationFn: async (id) => {
      console.log("Delete post id --->", id);
      const result = await Fetcher.delete(`/deletePost/${id}`);
      console.log("post result", result);
      return result;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["postData"] }),
  });

  return { deleteMutation };
};
