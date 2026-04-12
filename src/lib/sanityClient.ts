import { createClient, groq, SanityDocument } from 'next-sanity';
import {
  SANITY_PROJECT_ID,
  SANITY_DATASET,
  SANITY_API_VERSION,
  SANITY_TOKEN,
} from '../sanity/env';
import { JobPosting } from '../types';

export const sanityClient = createClient({
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET,
  apiVersion: SANITY_API_VERSION,
  useCdn: process.env.NODE_ENV === 'production',
  token: SANITY_TOKEN || undefined, // for mutations only
});

// Export as 'client' for convenience
export const client = sanityClient;

// currently only job postings are stored in Sanity
export type Schemas = JobPosting;


export const getJobPostings = async (): Promise<JobPosting[]> => {
  const query = groq`*[_type == "jobPosting"] | order(closingDate desc){
    _id,
    title,
    location,
    salary,
    description,
    closingDate,
    slug
  }`;
  return sanityClient.fetch<JobPosting[]>(query);
};
