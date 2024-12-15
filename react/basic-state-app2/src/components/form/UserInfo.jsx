import React from 'react';

export default function UserInfo() {

  const handleSubmi = () => {

  };

  return (
    <div>
      <form name='user-info' onSubmit={handleSubmi}>
        <h1>User Info</h1>
        <div>
          <label>Name</label>
          <input type="text" />
        </div>
        <div>
          <label>Address</label>
          <input type="text" />
        </div>
        <div>
          <label>Age</label>
          <input type="text" />
        </div>
        <div>
          <button type='submit'>Send</button>
        </div>
      </form>
    </div>
  );
}

