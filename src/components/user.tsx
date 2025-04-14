import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/store';
import { setUser, clearUser, getUser } from '../state/counter/userslice';

const User: React.FC = () => {
  const user = useSelector((state: RootState) => state.user.users[0]);
  const dispatch = useDispatch();

  const [view, setView] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    country: ''
  });

  const handleClick = () => {
    setView(!view);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: name === 'age' ? Number(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(setUser({users:[formData]}));
    setFormData({ name: '', age: 0, country: '' });
  };

 

  const handleReset = () => {
    dispatch(getUser({users: [user]}));
    setFormData({       
        name: '',
        age: 0,
        country: ''
        });
  };


  const handleDelete = () => {
    dispatch(clearUser({users:[formData]}));
    setFormData({
      name: '',
      age: 0,
      country: ''
    });
  };

  return (
    <div>
      <h1>User Information</h1>
      {user && (
        <>
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Country: {user.country}</p>
        </>
      )}

      <button onClick={handleClick}>
        {view ? 'Close Form' : 'Update User'}
      </button>

      {view && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name"
            onChange={handleChange}
          />
          <input
            type="number"
            name="age"
            value={formData.age}
            placeholder="Age"
            onChange={handleChange}
          />
          <input
            type="text"
            name="country"
            value={formData.country}
            placeholder="Country"
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
          <button type="button" onClick={handleReset}>Reset</button>
          <button type="button" onClick={handleDelete}>delete</button>
        </form>
      )}
    </div>
  );
};

export default User;
