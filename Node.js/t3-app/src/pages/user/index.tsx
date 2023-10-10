import { api } from "../../utils/api";

const UserPage = () => {
  const users = api.user.getAll.useQuery();

  return (
    <>
      {users.data?.map((user) => {
        return (
          <div key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <h1>{user.id}</h1>
          </div>
        );
      })}
    </>
  );
};

export default UserPage;
