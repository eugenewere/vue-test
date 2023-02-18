import EventService from "../../service/axios.js";

const latest_property = {
    namespaced: true,
    state: {
        properties: [],
    },
    mutations: {
        SET_PROPERTIES(state, data) {
            state.properties = data
        }
    },
    actions: {
        async fetch_latest_properties({commit}) {
            await EventService.get_latest_properties().then(res => {
                console.log(res)
                commit('SET_PROPERTIES', res['data']['properties'])
            })
        }
    },
}
export default latest_property