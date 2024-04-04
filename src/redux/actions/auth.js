import { LOGIN_API, OTP_VERIFY } from '../../config/urls';
import { storeData } from '../../utils/helperFunctions';
import { apiPost } from '../../utils/utils';
import { saveUserData } from '../reducers/auth';
import store from '../store';
import types from '../types';
const { dispatch } = store;


export const userLogin = (data) => {
  return new Promise((resolve, reject) => {
    apiPost(LOGIN_API, data).then((res) => {
      console.log("res++", res);
      if (!!res.data && res?.data?.validOTP) {
        storeData('userData', res.data).then((value)=> {
          dispatch(saveUserData(res.data))
          resolve(res)
        }).catch((error)=>{
          reject(error)
        })
      } else {
        resolve(res)
      }
    }).catch((error) => {
      reject(error)
    })
  })
  // dispatch(saveUserData(data)); 
};


export const otpVerify = (data, token = null) => {
  return new Promise((resolve, reject) => {
    apiPost(OTP_VERIFY, data).then((res) => {
      if (!!res?.data) {
        dispatch(saveUserData({ ...res.data, token }))
          resolve(res)
        } else {
        resolve(res)
      }
    }).catch((error) => {
      reject(error)
    })
  })
  // dispatch(saveUserData(data));
};

export const userSignup = (data) => {
  return apiPost('http://localhost:3000/signup', data)
};

export function logout() {
  dispatch({ type: types.CLEAR_REDUX_STATE });
}