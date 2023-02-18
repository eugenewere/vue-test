export interface User {
    tenant: Tenant;
}

export interface Tenant {
    user: UserClass;
    is_company: boolean;
    active_status: boolean;
    profile_image: string;
    as_individual: AsIndividual;
    as_company: AsCompany;
    created_at: Date;
    updated_at: Date;
    location: Location;
}

export interface AsCompany {
    user_type: number;
    company_name: string;
    company_phone: string;
    company_email: string;
    cell_phone: string;
    direct_phone: string;
    office_phone: string;
    preferred_phone: string;
    website: string;
    vat_no: string;
    pin_no: string;
    code: string;
}

export interface AsIndividual {
    created_at: Date;
    updated_at: Date;
    job_name: null;
    huduma_no: null;
    id_or_passport: string;
    phone: string;
}

export interface Location {
    name: string;
    locality: string;
    country_long: string;
    country_short: string;
    sub_locality_level_1: null;
    administrative_area_level_1: string;
}

export interface UserClass {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    usertype: string;
}


