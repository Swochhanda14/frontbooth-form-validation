import useRouter from "./hooks/useRouter";
import UserTable from "./pages/UserTable";
import AddEditUser from "./pages/AddEditUser";
import UserDetails from "./pages/UserDetails";
import Button from "./Components/lib/Button";

export default function App(){
    const { route, navigate } = useRouter();
    const path = route.path;

    return (
        <div className="min-h-screen bg-linear-to-br from-amber-50 to-orange-100">
            <div className="bg-linear-to-r from-amber-500 to-orange-500 text-white sticky top-0 z-10 flex items-center justify-between p-6 shadow-md border-b border-amber-200">
                <div>
                    <h3 className="font-bold text-3xl">Users</h3>
                    <p className="font-light text-sm">Manage users: add, edit, view</p>
                </div>
                <div className="flex gap-2">
                    <Button onClick={() => navigate('/') } title="Home" size="sm" variant="secondary" />
                    <Button onClick={() => navigate('/add') } title="+ Add User" size="sm" />
                </div>
            </div>
            <div className="p-6 w-full">
                {path === '/' && <UserTable />}
                {path === '/add' && <AddEditUser />}
                {path === '/edit' && <AddEditUser />}
                {path === '/view' && <UserDetails />}
            </div>
        </div>
    )
}
