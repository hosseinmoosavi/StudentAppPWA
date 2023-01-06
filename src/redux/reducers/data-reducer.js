/* eslint-disable default-param-last */
const initialState = {
  localeLanguage: 'fa',
  todoList: [],
};

const dataReducer = (state = initialState, action) => {
  console.log('%c Line:7 🥒 action', 'color:#6ec1c2', action);
  console.log('%c Line:7 🍅 state', 'color:#ed9ec7', state);
  switch (action.type) {
    case 'CHANGE_LOCALE_LANGUAGE':
      return {
        ...state,
        localeLanguage: action.payload.localeLanguage,
      };
    case 'ADD_TODO':
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todoList:action.payload.deleteDone,
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todoList: state.todoList.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          }
          return todo;
        }),
      };
      case 'EDIT_TASK':
        return{
          ...state,
          todoList: state.todoList.map((todo) => {
            if (todo.id === action.payload) {
              return {
                ...todo,
                title: action.payloadText,
              };
            }
            return todo;
          }),
        };
    default:
      return state;
  
}}
export default dataReducer;
