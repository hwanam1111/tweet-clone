import produce from 'immer';

export const initialState = {
  loginLoading: false,
  loginComplete: false,
  loginError: null,
  logoutLoading: false,
  logoutComplete: false,
  logoutError: null,
  signupLoading: false,
  signupComplete: false,
  signupError: null,
  changeNicknameLoading: false,
  changeNicknameComplete: false,
  changeNicknameError: null,
  followLoading: false,
  followComplete: false,
  followError: null,
  unfollowLoading: false,
  unfollowComplete: false,
  unfollowError: null,
  me: null,
  signUpDate: {},
  loginDate: {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

export const loginRequestAction = (data) => ({
  type: LOG_IN_REQUEST,
  data,
});

export const logoutRequestAction = () => ({
  type: LOG_OUT_REQUEST,
});

export const signupRequestAction = (data) => ({
  type: SIGN_UP_REQUEST,
  data,
});

export const changeNicknameAction = (data) => ({
  type: CHANGE_NICKNAME_REQUEST,
  data,
});

export const followAction = (data) => ({
  type: FOLLOW_REQUEST,
  data,
});

export const unfollowAction = (data) => ({
  type: UNFOLLOW_REQUEST,
  data,
});

const userReduce = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOG_IN_REQUEST:
      draft.loginLoading = true;
      draft.loginComplete = false;
      draft.loginError = null;

      break;
    case LOG_IN_SUCCESS:
      draft.loginLoading = false;
      draft.loginComplete = true;
      draft.loginError = null;
      draft.me = action.data.dummyUserData;

      break;
    case LOG_IN_FAILURE:
      draft.loginLoading = false;
      draft.loginComplete = false;
      draft.loginError = action.error;

      break;
    case LOG_OUT_REQUEST:
      draft.logoutLoading = true;
      draft.logoutComplete = false;
      draft.logoutError = null;

      break;
    case LOG_OUT_SUCCESS:
      draft.loginComplete = false;
      draft.logoutLoading = false;
      draft.logoutComplete = true;
      draft.logoutError = null;
      draft.me = null;

      break;
    case LOG_OUT_FAILURE:
      draft.logoutLoading = false;
      draft.logoutComplete = false;
      draft.logoutError = action.error;

      break;
    case SIGN_UP_REQUEST:
      draft.signupLoading = true;
      draft.signupComplete = false;
      draft.signupError = null;

      break;
    case SIGN_UP_SUCCESS:
      draft.signupLoading = false;
      draft.signupComplete = true;
      draft.signupError = null;

      break;
    case SIGN_UP_FAILURE:
      draft.signupLoading = false;
      draft.signupComplete = false;
      draft.signupError = action.error;

      break;
    case CHANGE_NICKNAME_REQUEST:
      draft.changeNicknameLoading = true;
      draft.changeNicknameComplete = false;
      draft.changeNicknameError = null;

      break;
    case CHANGE_NICKNAME_SUCCESS:
      draft.changeNicknameLoading = false;
      draft.changeNicknameComplete = true;
      draft.changeNicknameError = null;

      break;
    case CHANGE_NICKNAME_FAILURE:
      draft.changeNicknameLoading = false;
      draft.changeNicknameComplete = false;
      draft.changeNicknameError = action.error;

      break;
    case FOLLOW_REQUEST:
      draft.followLoading = true;
      draft.followComplete = false;
      draft.followError = null;

      break;
    case FOLLOW_SUCCESS:
      draft.followLoading = false;
      draft.followComplete = true;
      draft.followError = null;
      draft.me.Followings.push({ id: action.data });

      break;
    case FOLLOW_FAILURE:
      draft.followLoading = false;
      draft.followComplete = false;
      draft.followError = action.error;

      break;
    case UNFOLLOW_REQUEST:
      draft.unfollowLoading = true;
      draft.unfollowComplete = false;
      draft.unfollowError = null;

      break;
    case UNFOLLOW_SUCCESS:
      draft.unfollowLoading = false;
      draft.unfollowComplete = true;
      draft.unfollowError = null;
      draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data);

      break;
    case UNFOLLOW_FAILURE:
      draft.unfollowLoading = false;
      draft.unfollowComplete = false;
      draft.unfollowError = action.error;

      break;
    case ADD_POST_TO_ME:
      draft.me.Posts.unshift({ id: action.data });

      break;
    case REMOVE_POST_OF_ME: {
      draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);

      break;
    }
    default:
      break;
  }
});

export default userReduce;