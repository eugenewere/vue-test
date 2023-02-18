import EventService from "../../service/axios.js";

const featured_property = {
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
        async fetch_featured_properties({commit}) {
            await EventService.get_featured_properties().then(res => {
                console.log(res)
                commit('SET_PROPERTIES', res['data']['properties'])
            })
        }
    },
}
export default featured_property