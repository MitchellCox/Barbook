import $ from 'jquery'
<<<<<<< 69d12c70e4b5c81c2d9ed9a70dd7d885d4b3491a
import { search } from '../api/search'
=======
// import { search } from './api/search'
>>>>>>> bar book template

export const login = (email,pass,redirect, history) => {
  return(dispatch) => {
  $.ajax({
    url: '/api/signin',
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
			url: 'api/signup',
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

const getToken = () => {
	return Math.random().toString(36).substring(7)
}

export const logout = () => {
	return {
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

/* export const addSearch = (text) => {
	return(dispatch) => {
		fetch('/api/search',
		{
			method: 'POST',
			body: JSON.stringify({ text: text })
		}
		)
		.then( res => res.json())
		.then( json => dispatch(search('ADD_SEARCH', JSON)))
	}

} */
	 
