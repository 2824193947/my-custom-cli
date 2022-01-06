// user.js
export default [
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: 'ok',
        data: {},
      }
    },
  },
]