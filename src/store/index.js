import {createStore} from 'vuex'
import sign_in from "./modules/sign_in.js";
import property_type from "./modules/property_types.js";
import user_profile from "./modules/user_profile.js";
import featured_property from "./modules/featured_property.js";
import popular_property from "./modules/popular_property.js";
import latest_property from "./modules/latest_property.js";
import property_details from "./modules/property_details.js";

const store = createStore({
    modules: {
        sign_in,
        property_type,
        user_profile,
        featured_property,
        popular_property,
        latest_property,
        property_details
    }
})
export default store