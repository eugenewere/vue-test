import axios from 'axios'
import endpoint from './endpoints'


const apiClient = axios.create({
    baseURL: `http://localhost:8090`,
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 10000
})

export default {
    async sign_up_tenant(payload) {
        return await apiClient.post(endpoint.REGISTER_TENANT_USER, payload)
    },
    async sign_in_user(payload) {
        return await apiClient.post(endpoint.LOGIN_USER, payload)
    },
    async get_property_types(count = 10) {
        return await apiClient.get(`${endpoint.PROPERTY_TYPES}?limit=${count}`)
    },
    async get_user_profile_details() {
        let tkn = localStorage.getItem('tkn')

        return await apiClient.get(`${endpoint.USER_DETAILS}`, {
            headers: {
                AUTHORIZATION: `Bearer ${tkn}`,
            }
        })
    },
    async get_featured_properties() {
        let tkn = localStorage.getItem('tkn')
        return await apiClient.get(`${endpoint.FEATURED_PROPERTIES}`, {
            headers: {
                AUTHORIZATION: `Bearer ${tkn}`,
            }
        })
    },
    async get_latest_properties() {
        let tkn = localStorage.getItem('tkn')
        return await apiClient.get(`${endpoint.LATEST_PROPERTIES}`, {
            headers: {
                AUTHORIZATION: `Bearer ${tkn}`,
            }
        })
    },
    async get_popular_properties() {
        let tkn = localStorage.getItem('tkn')
        return await apiClient.get(`${endpoint.POPULAR_PROPERTIES}`, {
            headers: {
                AUTHORIZATION: `Bearer ${tkn}`,
            }
        })
    },
    async get_property(property_id) {
        let tkn = localStorage.getItem('tkn')
        return await apiClient.get(`${endpoint.PROPERTY_DETAILS}?property_id=${property_id}`, {
            headers: {
                AUTHORIZATION: `Bearer ${tkn}`,
            }
        })
    },


}