const initialState = {
  taskStatus: [
    { type: 'open', color: 'red' },
    { type: 'inProgress', color: 'yellow' },
    { type: 'test', color: 'blue' },
    { type: 'complete', color: 'green' },
  ],
  taskItems: [
    {
      key: '-MQrwTknqK8TCIrL73rs',
      task: 'sdasd',
      status: 'complete',
    },
    {
      key: '-MQs-WubZecGv-2eSxHW',
      task: 'dsdsadasd',
      status: 'open',
    },
    {
      key: '-MQsLobRqmji46s2isG1',
      task: '232',
      status: 'inProgress',
    },
    {
      key: '-MQsLpZEzICC55G0H60A',
      task: 'dsd',
      status: 'inProgress',
    },
    {
      key: '-MQsLrfivT_ba0wueJU1',
      task: 'complet2',
      status: 'complete',
    },
    {
      key: '-MQsLt4Ka3lmT-m0-Tjk',
      task: 'cmplete3',
      status: 'complete',
    },
  ],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
