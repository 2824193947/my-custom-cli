// user.js
export default [
  {
    url: '/api/get',
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