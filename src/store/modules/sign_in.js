import EventService from '../../service/axios'

let tkn = localStorage.getItem('tkn')
const sign_in = {
    namespaced: true,
    state: {
        token: tkn ? tkn : '',
    },
    mutations: {
        UPDATE_ACCESS_TOKEN(state, token) {
            state.token = token
            localStorage.setItem('tkn', token)
        },
        REMOVE_TOKEN(state) {
            state.token = '';
            localStorage.removeItem('tkn')
        },


    },
    actions: {
        async send_user_data({commit, dispatch}, payload) {
            await EventService
                .sign_in_user(payload)
                .then((res) => {
                        let success_payload = res['data'][0];
                        let token = success_payload.access_token
                        commit('UPDATE_ACCESS_TOKEN', token)
                        dispatch('user_profile/fetch_user_profile', {}, {root: true})
                    }
                )

        },

        deleteToken({commit, dispatch}) {
            commit('REMOVE_TOKEN');
            dispatch('user_profile/reset_user_profile', {}, {root: true})
        }
    },
    getters: {
        get_if_logged_in: (state) => !!state.token
    }
}
export default sign_in;