import { types } from '../types';

const initialState = {
  filterTaskId: 1,
  addingTask: false,
  path: 'allTasks',
  taskStatus: [
    { id: 0, type: '📋 BackLog', color: '#FA3C4C' },
    { id: 1, type: '📝 In Progress', color: '#0084FF' },
    { id: 2, type: '🧪 Testing ', color: '#FFC300' },
    { id: 3, type: '✅ Complete ', color: '#44BEC7' },
  ],
  taskItems: [],
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

    case types.SET_DB:
      return { ...state, path: action.payload };

    case types.ADD_TASK_TO_LIST:
      return { ...state, taskItems: action.payload };

    case types.SET_FILTEREDTASK_STATUS_ID:
      return { ...state, filterTaskId: action.payload };

    default:
      return state;
  }
};
