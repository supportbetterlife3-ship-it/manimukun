export type Service = {
  name: string;
  description: string;
};

export type ServiceIconColor =
  | 'rose'
  | 'red'
  | 'amber'
  | 'emerald'
  | 'blue'
  | 'violet'
  | 'teal'
  | 'indigo'
  | 'sky'
  | 'orange'
  | 'pink'
  | 'cyan'
  | 'fuchsia'
  | 'lime'
  | 'slate';

export type TeamMember = {
  id?: string;
  _id?: string;
  name: string;
  role: string;
  photo?: string;
  photoUrl?: string;
};

export type JobPosting = {
  id?: string;              // Sanity document ID (optional)
  title: string;
  slug: { current: string } | string;
  location: string;
  salary: string;
  description: string;
  closingDate: string;
};