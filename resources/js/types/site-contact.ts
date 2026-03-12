export type OperationalHour = {
    key: string;
    value: string;
};

export type SiteContact = {
    address?: string;
    phone?: string;
    whatsapp?: string;
    email?: string;
    operational_hours?: OperationalHour[];
    instagram?: string;
    facebook?: string;
    youtube?: string;
    location?: string;
};
