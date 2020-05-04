const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			path: 'http://127.0.0.1:5000',
			pathFile: "http://127.0.0.1:5000/users/file/",
			currentUser: null,
			isAuthenticated: false,
			email: '',
			password: '',
			oldpassword: '',
			errors: null,
			success: null,
			contact_name: '',
			contact_email: '',
			contact_message: '',
			visitors:'',
			scorecard: null,			
			show: false,
			//Your data structures, A.K.A Entities

		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			deleteErrors: (history) => {
				setStore({
					errors: null
				})
				history.push("/")
			},
			handleChange: e => {
				setStore({
					[e.target.name]: e.target.value
				})
			},
			handleChangeFile: e => {
				if (e.target.files[0].size > 1048576) {
					setStore({
						errors: { "msg": "Excede peso máximo" }
					})
					e.target.value = ""
				} else {
					setStore({
						[e.target.name]: e.target.files[0],
						errors: null,
					})
				}
			},
			isAuthenticated: () => {
				if (sessionStorage.getItem('currentUser')) {
					setStore({
						currentUser: JSON.parse(sessionStorage.getItem('currentUser')),
						isAuthenticated: sessionStorage.getItem('isAuthenticated')
					})
				}
			},
			login: (e, history) => {
				e.preventDefault();
				const store = getStore();

				fetch(store.path + '/login', {
					method: 'POST',
					body: JSON.stringify({
						email: store.email,
						password: store.password
					}),
					headers: {
						'Content-Type': 'application/json'

					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						if (data.msg) {
							setStore({
								errors: data
							})
						} else {
							setStore({
								currentUser: data,
								isAuthenticated: true,
								email: '',
								password: '',
								errors: null
							})
							sessionStorage.setItem('currentUser', JSON.stringify(data))
							sessionStorage.setItem('isAuthenticated', true)
							history.push("/scorecard");
						}
					})
			},
			register: (e, history) => {
				e.preventDefault();
				const store = getStore();

				fetch(store.path + '/register', {
					method: 'POST',
					body: JSON.stringify({
						email: store.email,
						password: store.password,
						direccion: store.direccion,
						fantasyname: store.fantasyname,
						rubro: store.rubro,
						empleados: store.empleados,
						ingresos: store.ingresos
					}),
					headers: {
						'Content-Type': 'application/json'

					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						if (data.msg) {
							setStore({
								errors: data
							})
						} else {
							setStore({
								currentUser: data,
								isAuthenticated: true,
								email: '',
								password: '',
								direccion: '',
								fantasyname: '',
								rubro: '',
								empleados: '',
								ingresos: '',
								errors: null
							})
							sessionStorage.setItem('currentUser', JSON.stringify(data))
							sessionStorage.setItem('isAuthenticated', true)
							history.push("/scorecard");
						}
					})
			},
			changePassword: (e, history) => {
				e.preventDefault();
				const store = getStore();
				const { access_token } = store.currentUser;
				console.log(access_token);

				fetch(store.path + '/change-password', {
					method: 'POST',
					body: JSON.stringify({
						oldpassword: store.oldpassword,
						password: store.password
					}),
					headers: {
						'Content-Type': 'application/json',
						'Authorization': 'Bearer ' + access_token
					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						if (data.msg) {
							setStore({
								errors: data
							})
							if (data.status === 401) {
								getActions().logout(history)
								history.push("/login")
							}
						} else {
							setStore({
								success: data,
								oldpassword: '',
								password: '',
								errors: null
							})
							getActions().logout(history)
							history.push("/login")
						}
					})

			},
			logout: (history) => {
				setStore({
					currentUser: null,
					isAuthenticated: false,
					email: '',
					password: '',
					errors: null
				})
				sessionStorage.removeItem('currentUser');
				sessionStorage.removeItem('isAuthenticated');
				history.push("/")
			},
			sendEmail: (e) => {
				e.preventDefault();
				const store = getStore();

				fetch(store.path + '/contact', {
					method: 'POST',
					body: JSON.stringify({
						name: store.contact_name,
						email: store.contact_email,
						message: store.contact_message
					}),
					headers: {
						'Content-Type': 'application/json'

					}
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						if (data.msg) {
							setStore({
								errors: data
							})
						} else {
							setStore({
								contact_name: '',
								contact_email: '',
								contact_message: '',
								errors: null,
								success: data
							})
						}
					})
			},
			upload: (e, history) => {
				e.preventDefault();
				const store = getStore();

				let formData = new FormData();
				formData.append("id", store.currentUser.user.id)
				formData.append("file", store.scorecard)


				fetch(store.path + '/scorecard', {
					method: 'POST',
					body: formData,
				})
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						if (data.msg) {
							setStore({
								errors: data
							})
						} else {
							setStore({
								currentUser: Object.assign(store.currentUser, { user: data }),
								isAuthenticated: true,
								id: '',
								file: null,
								errors: null
							})
							sessionStorage.setItem('currentUser', JSON.stringify(data))
							sessionStorage.setItem('isAuthenticated', true)
							history.push("/scorecard");
						}
					})
			},
			counter: () => {				
				const store = getStore();
				fetch(store.path + '/counter')
					 
					.then(resp => resp.json())
					.then(data => {
						console.log(data)
						setStore({
							visitors: data
						})					
					
				})
			},
		}
	};
};


export default getState;