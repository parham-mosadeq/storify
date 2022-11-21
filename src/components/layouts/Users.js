import React, { useEffect } from 'react';
// redux
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/users/actionsUsers';
const Users = () => {
  const dispatch = useDispatch();

  const users = useSelector((state) => state.usersState.users.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(users);

  return (
    <article>
      {users > 0
        ? users.map((item) => {
            console.log(item);
            const { id, firstName, email, image } = item;

            return (
              <div key={id}>
                <div>
                  <img src={image} alt={firstName} />
                </div>
                <div>
                  <p>{firstName}</p>
                  <span>{email}</span>
                </div>
              </div>
            );
          })
        : null}
    </article>
  );
};

export default Users;
