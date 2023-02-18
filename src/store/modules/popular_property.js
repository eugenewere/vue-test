import EventService from "../../service/axios.js";

const popular_property = {
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
        async fetch_popular_properties({commit}) {
            await EventService.get_popular_properties().then(res => {
                console.log(res)
                commit('SET_PROPERTIES', res['data']['properties'])
            })
        }
    },
}
export default popular_property