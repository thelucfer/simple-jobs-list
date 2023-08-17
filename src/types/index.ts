export type Listing = {
  id: number;
  title: string;
  slug: string;
  urls: {
    ad: string;
    apply: string;
  };
  description: string;
  skills: string;
  employmentType: string;
  function: string;
  experience: string;
  language: string;

  company: Company;
  contact: Contact;
  locations: string[];
};

export type Company = {
  id: number;
  slug: string;
  name: string;

  website: string;
  logo: string;
  cover: string;
};

export type Contact = {
  name: string;
  email: string;
  phone: string;
  photo?: string;
};

export type ListingResponse = {
  id: number;
  company: {
    id: number;
    slug: string;
    name: string;
    name_internal: string;
    website: string;
    industry: string;
    descr: string;
    logo: string;
    cover: string;
  };
  contact: {
    name: string;
    email: string;
    phone: string;
    photo?: string;
  };

  descr: string;
  employment_type: string;
  experience: string;
  from_date: string;
  function: string;
  language: string;
  linkedInCompanyId?: number;
  locations: Array<{
    location: {
      text: string;
      area_2_short?: string;
      city?: string;
      area_1_short?: string;
      area_2?: string;
      area_1?: string;
      place_id?: string;
      url?: string;
      city_short?: string;
      country?: string;
      country_short?: string;
    };
  }>;
  slug: string;
  title: string;

  urls: {
    ad: string;
    apply: string;
  };
  video: {
    url: string;
  };
  owner: {
    id: number;
    name: string;
    email: string;
  };
  skills: string;
  application_date_is_hidden: boolean;
};
