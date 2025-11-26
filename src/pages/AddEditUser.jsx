import { useDispatch, useSelector } from "react-redux";
import Button from "../Components/lib/Button";
import MainForm from "../forms/MainForm";
import useRouter from "../hooks/useRouter";
import { addUser, updateUser } from "../store/userslice";

export default function AddEditUser(){
    const { route, navigate } = useRouter();
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const editUser = route.params.id ? users.find(u => u.id === route.params.id) : null;

    const normalizeDob = (dob) => {
        if (!dob) return '';
        if (dob instanceof Date) return dob.toISOString().slice(0, 10);
        if (typeof dob === 'string') return dob;
        const d = new Date(dob);
        return isNaN(d) ? '' : d.toISOString().slice(0, 10);
    };

    const handleFormSubmit = (data) => {
        const payload = { ...data, dob: normalizeDob(data.dob) };
        if(editUser){
            dispatch(updateUser({
                ...payload,
                id: editUser.id
            }));
        }else{
            dispatch(addUser(payload));
        }
        navigate('/');
    };

    return(
        <div className="min-h-screen bg-gray-50 py-10 px-6">
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">
                        {editUser ? 'Edit User' : 'Add New User'}
                    </h1>
                <Button
                  onClick={() => navigate('/')}
                  title="← Back to List"  
                  size="sm"
                  variant="secondary"
                />
                </div>
                <MainForm
                    onSubmit={handleFormSubmit}
                    defaultValues={editUser || {}}
                    isEdit={!!editUser}
                />
            </div>
        </div>
    );
}

