import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Fetcher } from "client";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export const useAllPost = ({ tid, uid }) => {
  const { data: session } = useSession();
  const { isLoading, error, data } = useQuery({
    queryKey: ["postData"],
    queryFn: async () =>
      await Fetcher.get("/allPostByStack", {
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
      console.log("Edit Form Data",formData);
      const result = await Fetcher.post("/createPost", formData, {
        headers: {
          Authorization: `bearer ${session.user.token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("post result", result);
      return result.data;
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["postData"] }),
  });

  return { createMutation };
};
export const usePostById = (id) => {
  const { data: session } = useSession();
  const { isLoading, error, data } = useQuery({
    queryKey: ["postIdData"],
    queryFn: async () => {
      const result = await Fetcher.get(`/getPostbyId/${id}`, {
        headers: {
          Authorization: `bearer ${session.user.token}`,
          "Content-Type": "application/json",
        },
      });
      console.log("result data", result.data);
      return result.data;
    },
  });
  useEffect(() => {
    console.log("usePostById-->", id);
  }, [id]);
  return { data };
};
export const useEditPost = () => {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const editMutation = useMutation({
    mutationKey: ["editTech"],
    mutationFn: async (id, formData) => {
      console.log(id);
      const result = await Fetcher.put(`/updatePost/${id}`, formData, {
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
      const result = await Fetcher.delete(`/deletePost/${id}`, {
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

  return { deleteMutation };
};
