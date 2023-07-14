import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Fetcher } from "client";

export function useCreateStack() {
  const queryClient = useQueryClient();
  const createMutation = useMutation({
    mutationKey: ["createTech"],
    mutationFn: async (formdata) => {
      console.log("Session DAta", formdata);
      const result = await Fetcher.post(
        "/createTech",
        {
          userId: formdata.session.user.id,
          technology: formdata.inputVal,
          page: formdata.inputVal,
        },
        {
          headers: {
            Authorization: `bearer ${formdata.session.user.token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        return response.data; 
      })
        .then((response) => {
          console.log("result response",response.data); // log the response data to the console
        })
        .catch((error) => {
          console.error(error); // log any errors to the console
        });
     

     
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["techData"] }),
  });
  return { createMutation };
}
