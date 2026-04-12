import { defineQuery } from 'next-sanity';

// Query for fetching all job postings sorted by newest first
export const JOBS_QUERY = defineQuery(`
  *[_type == "jobPosting"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    location,
    salary,
    jobType,
    closingDate,
    description
  }
`);

// Query for fetching a single job by slug
export const JOB_BY_SLUG_QUERY = defineQuery(`
  *[_type == "jobPosting" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    location,
    salary,
    jobType,
    closingDate,
    description
  }
`);

