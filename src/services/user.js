export const getFriends = () => {
  return new Promise((resolve, reject) => {
    let users = [
      {
        uuid: '1',
        firstName: 'John',
        lastName: 'Wilson',
        messages: [
          {
            sender: '1',
            receiver: '0',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            date: '2017-05-10 12:14'
          },
          {
            sender: '0',
            receiver: '1',
            text: 'Nullam ligula turpis, luctus sed dui id',
            date: '2017-05-10 12:15'
          },
          {
            sender: '1',
            receiver: '0',
            text: 'posuere sollicitudin dui. Etiam placerat sit amet leo nec dictum',
            date: '2017-05-10 12:16'
          },
          {
            sender: '0',
            receiver: '1',
            text: 'Nam consequat nisi non augue semper, non laoreet ante interdum.',
            date: '2017-05-10 12:17'
          },
          {
            sender: '1',
            receiver: '0',
            text: 'Donec venenatis convallis dolor, eu dignissim felis finibus ac',
            date: '2017-05-10 12:18'
          },
          {
            sender: '0',
            receiver: '1',
            text: 'Mauris sit amet dolor dolor. Vestibulum eget augue id magna maximus aliquet sit amet id sem',
            date: '2017-05-10 12:19'
          },
          {
            sender: '1',
            receiver: '0',
            text: 'Vestibulum nisl leo, lobortis in felis a, malesuada mollis felis. Fusce mattis, turpis nec condimentum dignissim, massa ante egestas quam, rhoncus iaculis ipsum urna vitae felis. Etiam pretium lacinia felis, sed scelerisque tellus interdum sit amet. Aliquam porttitor justo at pulvinar pellentesque.',
            date: '2017-05-10 12:20'
          },
          {
            sender: '0',
            receiver: '1',
            text: 'Mauris vestibulum faucibus odio, ac facilisis ipsum interdum eu. Morbi nunc est, vehicula sit amet pharetra quis, varius nec quam. Mauris non malesuada ligula.',
            date: '2017-05-10 12:21'
          }
        ]
      },
      {
        uuid: '2',
        firstName: 'Mike',
        lastName: 'Perry',
        messages: [],
      },
      {
        uuid: '3',
        firstName: 'William',
        lastName: 'Evans',
        messages: [],
      },
      {
        uuid: '4',
        firstName: 'Grace',
        lastName: 'Ward',
        messages: [],
      },
      {
        uuid: '5',
        firstName: 'Katherine',
        lastName: 'Miller',
        messages: [],
      },
      {
        uuid: '6',
        firstName: 'Mia',
        lastName: 'Thomas',
        messages: [],
      },
      {
        uuid: '7',
        firstName: 'Michael',
        lastName: 'Harris',
        messages: [],
      },
      {
        uuid: '8',
        firstName: 'Emily',
        lastName: 'White',
        messages: [],
      }
    ];
    resolve(users);
    reject(new Error('Error - Friends list'));
  });
};

export const getMe = () => (
    {
      uuid: '0',
      firstName: 'John',
      lastName: 'Doe'
    }
);
