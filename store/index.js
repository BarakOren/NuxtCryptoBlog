import Vuex from "vuex";
import axios from "axios"
import Cookie from "js-cookie";
import { longStackSupport } from "q";

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: [],
            token: null
        },
        mutations: {
            setPosts(state, posts){
                state.loadedPosts = posts
            },
            addPost(state, post) {
                state.loadedPosts.push(post)
              },
            editPost(state, editedPost) {
            const postIndex = state.loadedPosts.findIndex(
                post => post.id === editedPost.id
            );
            state.loadedPosts[postIndex] = editedPost
            },
            setToken(state, token){
                state.token = token
            },
            clearToken(state){
                state.token = null
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context){
                return axios.get(process.env.baseUrl + "/posts.json")
                .then(res => {
                    const postsArray = []
                    for (const key in res.data){
                        postsArray.push({...res.data[key], id: key})
                    }
                    // console.log(postsArray)
                    vuexContext.commit("setPosts", postsArray)
                })
                .catch(e => context.error(e))
            },
            addPost(vuexContext, post){
                const createdPost = {...post, updatedDate: new Date()}
                return axios.post(process.env.baseUrl + "/posts.json", createdPost)
                .then(res => {
                    vuexContext.commit('addPost', {...createdPost, id: res.data.name})
                })
                .catch(e => console.log(e))
            },
            editPost(vuexContext, editedPost){
                return axios.put(process.env.baseUrl + "/posts/"
                + editedPost.id + ".json?auth=" + vuexContext.state.token
                , editedPost)
                .then(res => {
                    vuexContext.commit('editPost', editedPost)
                })
                .catch(e => console.log(e))
            },
            setPosts(vuexContext, posts){//posts is payload
                vuexContext.commit("setPosts", posts)
            },
            authenticateUser(vuexContext, authData){
                let authURL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + process.env.fApiKey
                if(!authData.isLogin){
                authURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + process.env.fApiKey
                }
                return axios.post(authURL,
                    {
                        email: authData.email,
                        password: authData.password,
                        returnSecureToken: true
                    }
                    ).then(res => {
                        vuexContext.commit('setToken', res.data.idToken)
                        localStorage.setItem('token', res.data.idToken)
                        localStorage.setItem('tokenExpiration', new Date().getTime() + Number.parseInt(res.expiresIn) * 1000)
                        Cookie.set('jwt', res.data.idToken)
                        Cookie.set('expirationDate', new Date().getTime() + Number.parseInt(res.expiresIn)  * 1000)
                        return axios.post('http://localhost:3000/api/track-data', {data: "Authenticated"})
                    }).catch(error => {
                        if (error.response) {
                            console.log(error.response)
                            // this.error = error.response.data.error.message
                        } else if (error.request) {console.log(error.request);
                        } else {console.log("Error", error.message);
                        }
                    })
                },

                initAuth(vuexContext, req){
                    let token;
                    let expirationDate;
                    if(req){
                        if(!req.headers.cookie){return}
                        const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith('jwt='))
                        if(!jwtCookie){return}
                        token = jwtCookie.split('=')[1]
                        expirationDate = req.headers.cookie.split(';').find(c => c.trim().startsWith('expirationDate='))
                        .split("=")[1];
                    } else {
                        token = localStorage.getItem('token')
                        expirationDate = localStorage.getItem('tokenExpiration')
                    }
                    if(new Date().getTime() > expirationDate || !token){
                        vuexContext.commit("clearToken")
                        vuexContext.dispatch("logout")
                        return
                    }
                    vuexContext.commit('setToken', token)
                },

                logout(vuexContext){
                    vuexContext.commit("clearToken")
                    Cookie.remove("jwt")
                    Cookie.remove("expirationDate")
                    if(process.client){
                        localStorage.removeItem("token")
                        localStorage.removeItem("tokenExpiration")
                    }
                }
            },
        getters: {
            loadedPosts(state){
                return state.loadedPosts
            },
            isAuthenticated(state){
                return state.token != null
            }
        }
    })
}

export default createStore;