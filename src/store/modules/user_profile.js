import EventService from '../../service/axios'

const user_profile = {
    namespaced: true,
    state: {
        user_details: null
    },
    mutations: {
        UPDATE_USER_DETAILS(state, data) {
            state.user_details = data
        },
        CLEAR_PROFILE(state) {
            state.user_details = {}
        }
    },
    actions: {
        async fetch_user_profile({commit}) {
            let tkn = localStorage.getItem('tkn')
            if (!tkn) return;
            await EventService.get_user_profile_details()
                .then(res => {
                    commit('UPDATE_USER_DETAILS', res['data']['tenant'])
                })
                .catch(err => {
                    let error_payload = err['response']['data'][0];
                    alert(error_payload['message'])
                })
        },
        reset_user_profile({commit}) {
            commit('CLEAR_PROFILE')
        },
    },
    getters: {
        get_full_name: (state) => state.user_details
            ? `${state.user_details.user?.first_name} ${state.user_details.user?.last_name}`
            : 'User name',
        get_email: (state) => state.user_details
            ? state.user_details.user?.email
            : 'User email',

    }
}
export default user_profile;