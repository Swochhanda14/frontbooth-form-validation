import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = {
    users: []
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push({
                id: nanoid(),
                ...action.payload
            });
        },
        updateUser: (state, action) => {
            const index = state.users.findIndex(u => u.id === action.payload.id);
            if (index !== -1) state.users[index] = action.payload;
        },
        deleteUser: (state, action) => {
            state.users = state.users.filter(u => u.id !== action.payload);
        }
    }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;
