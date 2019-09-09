const UPDATE_EMAIL_TEXT = 'UPDATE_EMAIL_TEXT';
const UPDATE_PASSWORD_TEXT = 'UPDATE_PASSWORD_TEXT';

const initialState = {
  email: '',
  password: '',
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_EMAIL_TEXT: {
      debugger
      return {...state, email: action.newEmailText};
    }
    case UPDATE_PASSWORD_TEXT: {
      return {...state, password: action.newPasswordText};
    }
    default: {
      return state;
    }
  }
};

export const updateEmailText = newEmailText => ({
  type: UPDATE_EMAIL_TEXT,
  newEmailText,
});

export const updatePasswordText = newPasswordText => ({
  type: UPDATE_PASSWORD_TEXT,
  newPasswordText,
});

export default signInReducer;
