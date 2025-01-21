export  const UserSchema = {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'firstName',
        title: 'firstName',
        type: 'string',
      },
      {
        name: 'lastName',
        title: 'lastName',
        type: 'string',
      },
      {
        name: 'password',
        title: 'Password',
        type: 'string',
      },
      {
        name: 'email',
        title: 'Email',
        type: 'email',
      },
      {
        name: 'number',
        title: 'PhoneNumber',
        type: 'number',
      },

    {
      name:"image",
      title:"Image",
      type:'string'
     
    }

    ],
  };
  