import { Listing, ListingResponse } from '../types';

export const formatListing = (listing: ListingResponse): Listing => ({
  id: listing.id,
  title: listing.title,
  slug: listing.slug,
  urls: {
    ad: listing.urls.ad,
    apply: listing.urls.apply,
  },
  description: listing.descr,
  skills: listing.skills,

  employmentType: listing.employment_type,
  function: listing.function,
  experience: listing.experience,
  language: listing.language,

  company: {
    id: listing.company.id,
    slug: listing.company.slug,
    name: listing.company.name,

    website: listing.company.website,
    logo: listing.company.logo,
    cover: listing.company.cover,
  },
  contact: {
    name: listing.contact.name,
    email: listing.contact.email,
    phone: listing.contact.phone,
    photo: listing.contact.photo,
  },

  locations: listing.locations.map((location) => location.location.text),
});
