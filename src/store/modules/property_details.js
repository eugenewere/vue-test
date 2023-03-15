import EventService from "../../service/axios.js";

const property_details = {
    namespaced: true,
    state: {
        property: {}
    },
    mutations: {
        SET_PROPERTY(state, data) {
            state.property = data
        }
    },
    actions: {
        async fetch_property({commit}, property_id) {
            await EventService.get_property(property_id).then(res => {
                console.log(res['data']['property']);
                commit('SET_PROPERTY', res['data']['property'])
            }).catch(error => console.log(error))
        }

    }
}
export default property_details