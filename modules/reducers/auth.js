const auth = (state = { isAuthticated: false }, action) => {
  switch (action.type) {
    case 'USER_LOGGED_IN':
      return {
        isAuthticated: true,
        id: action.id,
        token: action.token
      }
    case 'USER_LOGGED_OUT':
      return {
        isAuthticated: false,
        status: (action.status || 'logged out')
      }
    default: 
      return state
  }
}

export default auth
