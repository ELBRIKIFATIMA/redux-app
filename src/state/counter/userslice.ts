import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { count } from 'console';
import { get } from 'http';
interface UserState{
    name:string;
    age:number;
    country:string;
}
// Initial state
// Define the initial state using that type
// Define the initial state using that type
const initialState: UserState = {
    name:'fatima', 
    age:23,
    country:'Morocco'
};
const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        getUser:(state,action:PayloadAction<UserState>)=>{
            state.name=action.payload.name;
            state.age=action.payload.age;
            state.country=action.payload.country;
        },
        setUser:(state,action:PayloadAction<UserState>)=>{
            state.name=action.payload.name;
            state.age=action.payload.age;
            state.country=action.payload.country;
        },
        clearUser:(state)=>{
            state.name='';
            state.age=0;
            state.country='';
        },
        addUser:(state,action:PayloadAction<UserState>)=>{
            state.name=action.payload.name;
            state.age=action.payload.age;
            state.country=action.payload.country;
        }
    }
})
export const {getUser,setUser,clearUser,addUser}=userSlice.actions;
export default userSlice.reducer;
// The userSlice is a slice of the store that contains the user state and actions