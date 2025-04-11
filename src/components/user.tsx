import React,{useState} from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import { useDispatch } from 'react-redux';
import { setUser } from '../state/counter/userslice';
const User: React.FC = () => {
    const [view, setView] = useState(false);
    
    
    const name = useSelector((state: RootState) => state.user.name);
    const age = useSelector((state: RootState) => state.user.age);
    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === 'name') {
            dispatch(setUser({ name: value, age: age, country: '' }));
        } else if (name === 'age') {
            dispatch(setUser({ name: name, age: parseInt(value), country: '' }));
        }
    };
    const handleClick = () => {
        setView(!view);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get('name') as string;
        const age = formData.get('age') as string;
        dispatch(setUser({ name, age: parseInt(age), country: '' }));
    };
    const handleReset = () => { 
        dispatch(setUser({ name: '', age: 0, country: '' }));
    }
    const handleDelete = () => {
        dispatch(setUser({ name: '', age: 0, country: '' }));
    }
    const handleUpdate = () => {
        dispatch(setUser({ name: name, age: age, country: '' }));
    }
    const handleAdd = () => {
        dispatch(setUser({ name: name, age: age, country: '' }));
    }
    return (
        <div>
            <h1>User Information</h1>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <button onClick={handleClick}
            >Toggle View</button>
            {view && (
                <div>
                    <h2>Form</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            onChange={handleChange}
                        />
                        <input
                            type="number"
                            name="age"
                            placeholder="Enter age"
                            onChange={handleChange}
                        />
                        <button type="submit">Submit</button>
                    
                    <button onClick={handleReset}>Reset</button>
                    <button onClick={handleDelete}>Delete</button>
                    <button onClick={handleUpdate}>Update</button>
                    <button onClick={handleAdd}>Add</button>
                    </form>
                </div>)
            }
            
        </div>
    );
};

export default User;