import EventService from '../../service/axios'

const property_type = {
    namespaced: true,
    state: {
        property_types: []
    },
    mutations: {
        UPDATE_PROPERTY_TYPE(state, data) {
            state.property_types = data;
        }
    },
    actions: {
        async fetch_property_types({commit}) {
            await EventService.get_property_types(12).then(res => {
                commit('UPDATE_PROPERTY_TYPE', res ? res['data']['property_types'] : [])
            })
        },

    },

}
export default property_type;