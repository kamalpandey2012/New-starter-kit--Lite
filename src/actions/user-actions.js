import * as types from './action-types';
import { push, replace } from 'react-router-redux';
import Api from '../api';
import * as toastrActions from './toastr-actions';
import qs from 'query-string';

const api = Api();

export const set_login_status = (data) => {
  return { type: types.SET_LOGIN_STATE, data }
}


export const on_change_login_form = (data) => {
  return { type: types.ON_CHANGE_LOGIN_FORM, data }
}

export const login_success = (data) => {
  return (dispatch) => {
    dispatch({ type: types.LOGIN_SUCCESS, data });
    return dispatch(login_success_route())
  }
}

export const login_success_route = () => {
  return (dispatch, getState) => {
    const newState = getState();
    const paramQuery = qs.parse(newState.routing.location.search);
    return dispatch(replace(paramQuery.redirect));
  }
}

export const go_to_auth_page = (data) => {
  return (dispatch) => {
    return dispatch(push(`/login?redirect=${data.redirect}`));
  }
}

export const login = (data) => {
  return (dispatch) => {
    return api.post('/admin/account/login', data).then((response) => {
      if (!response.status) {
        dispatch(toastrActions.pop_toast({ msg: response.msg, status: false }));
      }
      dispatch(toastrActions.pop_toast({ msg: response.msg, status: true }));
      return dispatch(login_success({ token: response.token }));
    }).catch((err) => {
      return dispatch(toastrActions.pop_toast({ msg: err, status: false }));
    })
  }
}
