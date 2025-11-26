import { useSelector } from "react-redux";
import Button from "../Components/lib/Button";
import useRouter from "../hooks/useRouter";

function DetailRow({ label, value }) {
  return (
    <div className="grid grid-cols-3 gap-4 border-b border-gray-200 pb-3">
      <div className="col-span-1">
        <span className="font-semibold text-gray-700">{label}:</span>
      </div>
      <div className="col-span-2">
        <span className="text-gray-900">{value}</span>
      </div>
    </div>
  );
}

export default function UserDetail() {
  const { route, navigate } = useRouter();
  const users = useSelector(state => state.users.users);
  const user = users.find(u => u.id === route.params.id);

  const formatDob = (dob) => {
    if (!dob) return "";
    if (dob instanceof Date) return dob.toISOString().slice(0, 10);
    if (typeof dob === "string") return dob;
    const d = new Date(dob);
    return isNaN(d) ? "" : d.toISOString().slice(0, 10);
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">User not found</h2>
          <button 
            onClick={() => navigate('/')} 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">User Details</h1>
          <button 
            onClick={() => navigate('/')} 
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to List
          </button>
        </div>

        <div className="space-y-4">
          <DetailRow label="Full Name" value={`${user.fname ?? ''} ${user.lname ?? ''}`.trim()} />
          <DetailRow label="Email" value={user.email} />
          <DetailRow label="Age" value={user.age} />
          <DetailRow label="Gender" value={user.gender} />
          <DetailRow label="Date of Birth" value={formatDob(user.dob)} />
          <DetailRow label="Skills" value={(
            <div className="flex flex-wrap gap-2">
              {user.skills?.map((s) => (
                <span key={s} className="inline-flex items-center rounded-full bg-amber-100 text-amber-700 px-2 py-1 text-xs font-medium">
                  {s}
                </span>
              ))}
            </div>
          )} />
          <DetailRow label="Bio" value={user.bio} />
        </div>

        <div className="flex gap-4 mt-8">
          <Button onClick={() => navigate('/edit', { id: user.id })}>
            Edit User
          </Button>
          <Button onClick={() => navigate('/')}>
            Back to List
          </Button>
        </div>
      </div>
    </div>
  );
}
