import { useRouter } from "next/router";
import { api } from "../../utils/api";

const UserPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const userQuery = api.user.getById.useQuery(id);

  return (
    <div>
      <h1>{userQuery.data?.name}</h1>
    </div>
  );
};

export default UserPage;
