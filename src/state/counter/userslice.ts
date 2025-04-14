import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { count } from 'console';
import { get } from 'http';
interface User {
    name: string;
    age: number;
    country: string;
}

interface UserState {
    users: User[];

       
};
const initialState: UserState = {
    users: [
        {
            name: "fatima",
            age: 23,
            country: "Morroco"
        }
    ]
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: (state, action: PayloadAction<UserState>) => {
            state.users[0].name = action.payload.users[0].name;
            state.users[0].age = action.payload.users[0].age;
            state.users[0].country = action.payload.users[0].country;
        },
        setUser: (state, action: PayloadAction<UserState>) => {
            state.users[0].name = action.payload.users[0].name;
            state.users[0].age = action.payload.users[0].age;
            state.users[0].country = action.payload.users[0].country;
        },
        clearUser: (state, action: PayloadAction<UserState>) => {
            state.users[0].name = '';
            state.users[0].age = 0;
            state.users[0].country = '';
        },
        addUser: (state, action: PayloadAction<UserState>) => {
            state.users.push({
                name: action.payload.users[0].name,
                age: action.payload.users[0].age,
                country: action.payload.users[0].country
            });
        }
    }
})
export const { getUser, setUser, clearUser, addUser } = userSlice.actions;
export default userSlice.reducer;
