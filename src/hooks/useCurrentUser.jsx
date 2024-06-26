import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import { axiosPublic } from "./useAxiosPublic";

const useCurrentUser = () => {
  const { user, loading } = useAuth();

  const { data: currentUser } = useQuery({
    queryKey: ["currentUser", user?.email, loading],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosPublic.get(`/users/${user?.email}`);
      return res?.data;
    },
  });

  return currentUser;
};

export default useCurrentUser;
