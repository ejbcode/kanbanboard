import { types } from '../types';

const initialState = {
  addingTask: false,
  taskStatus: [
    { id: 0, type: 'BackLog', color: '#FA3C4C' },
    { id: 1, type: 'In Progress', color: '#0084FF' },
    { id: 2, type: 'Testing', color: '#FFC300' },
    { id: 3, type: 'Complete', color: '#44BEC7' },
  ],
  taskItems: [
    {
      key: '-MQrwTknqK8TCIrL73rs',
      task: 'stattus3',
      status: 3,
    },
    {
      key: '-MQrwTknqK8TCIrL753rs',
      task: 'stattus0',
      status: 0,
    },
    {
      key: '-MQs-WubZecGv-2eSxHW',
      task: 'stattus1',
      status: 1,
    },
    {
      key: '-MQsLobRqmji46s2isG1',
      task: 'stattus1.2',
      status: 1,
    },
    {
      key: '-MQsLpZEzICC55G0H60A',
      task: 'stattus2',
      status: 2,
    },
    {
      key: '-MQsLrfivT_ba0wueJU1',
      task: 'complet2',
      status: 3,
    },
    {
      key: '-MQsLt4Ka3lmT-m0-Tjk',
      task: 'cmplete3',
      status: 3,
    },
  ],
};

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_STATUS:
      return {
        ...state,
        taskItems: state.taskItems.map((item) =>
          item.key === action.payload.id
            ? { ...item, status: item.status + action.payload.step }
            : item
        ),
      };

    case types.ADD_TASK:
      return { ...state, addingTask: true };

    default:
      return state;
  }
};
