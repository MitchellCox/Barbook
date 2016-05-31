import $ from 'jquery'

export const login = (email,pass,redirect, history) => {
  return(dispatch) => {
  $.ajax({
    url: '/api/auth',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify({ email: email, password: pass })
  }).done( res => {
    const token = getToken()
    sessionStorage.token = token
    sessionStorage.userId = res.id
    dispatch(loggedIn(res.id, token))
    history.push(redirect)
		}).fail( res => {
			sessionStorage.clear()
			dispatch(logout())
		})
	}
}

export const signUp = (email, pass, redirect, history) => {
	return (dispatch) => {
		$.ajax({
			url: 'api/auth',
			type: 'POST',
			data: JSON.stringify({ email: email, password: pass })
		}).done( res => {
			const token = getToken()
			sessionStorage.token = token
			sessionStorage.userId = res.id
			dispatch(loggedIn(res.id, token))
			history.push(redirect)
		}).fail( res => {
			sessionStorage.clear()
			dispatch(logout())
		})
	}
}

export const logout = () => {
	return{
		type: 'USER_LOGGED_OUT'
	}
}

export const loggedIn = (id, token) => {
	return {
		type: 'USER_LOGGED_IN',
    id,
    token
	}
}

const getToken = () => {
	return Math.random().toString(36).substring(7)
}

