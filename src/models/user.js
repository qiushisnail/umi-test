import axios from 'axios'

const userinfo = JSON.parse(localStorage.getItem('userinfo')) ||
  {
    token: '',
    username: '',
    role: '',
    balance: 0
  }

function login(payload) {
  return axios.post('/api/login', payload).then(res => res.data.data)
}

export default {
  state: userinfo,
  effects: {
    *login(action, { call, put }) {
      try {
        const userinfo = yield call(login, action.payload)
        //请求成功
        localStorage.setItem('userinfo')
        yield put({ type: 'init', payload: userinfo })
      } catch (error) {
      }


    }
  },
  reducers: {
    init(state, action) {
      return action.payload; //直接覆盖
    }
  }
}