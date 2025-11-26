import { useDispatch, useSelector } from "react-redux";
import Button from "../Components/lib/Button";
import useRouter from "../hooks/useRouter";
import { deleteUser } from "../store/userslice";

export default function UserTable() {
  const { navigate } = useRouter();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const formatDob = (dob) => {
    if (!dob) return "";
    if (dob instanceof Date) return dob.toISOString().slice(0, 10);
    if (typeof dob === "string") return dob;
    const d = new Date(dob);
    return isNaN(d) ? "" : d.toISOString().slice(0, 10);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUser(id));
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="w-full">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Users</h1>
          <Button onClick={() => navigate("/add")} title="+ Add New User" size="sm" />
        </div>

        {users.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <p className="text-gray-500 text-lg">No users found. Add a user first!</p>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Phone Number
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Age
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Education
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Gender
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Skills
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Expected Salary
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      DOB
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Bio
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                        {`${user.fname ?? ''} ${user.lname ?? ''}`.trim()}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {user.email}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {user.phn}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {user.age}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {user.edu}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {user.gender}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <div className="flex flex-wrap gap-2">
                          {user.skills?.map((s) => (
                            <span key={s} className="inline-flex items-center rounded-full bg-amber-100 text-amber-700 px-2 py-1 text-xs font-medium">
                              {s}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {user.expsalary}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {formatDob(user.dob)}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {user.bio}
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <div className="flex gap-2">
                          <Button onClick={() => navigate("/view", { id: user.id })} size="sm" variant="secondary">View</Button>
                          <Button onClick={() => navigate("/edit", { id: user.id })} size="sm">Edit</Button>
                          <Button onClick={() => handleDelete(user.id)} size="sm" variant="danger">Delete</Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
