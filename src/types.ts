export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  heroDesc: string;
  iconName: string;
  badge?: string;
  challenges: string[];
  capabilities: string[];
  deliverables: string[];
  targetAudience: string[];
  workflowSteps: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  metaTitle: string;
  metaDesc: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  scope: string[];
  challenge: string;
  strategy: string;
  deliverables: string[];
  verifiedOutcomes: string[];
  image: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedDate: string;
  readTime: string;
  author: string;
  content: string[];
}

export interface LeadSubmissionPayload {
  name: string;
  email: string;
  phone: string;
  company?: string;
  website?: string;
  service: string;
  budget?: string;
  requirements: string;
  consent: boolean;
  _gotcha?: string;
  source_page?: string;
}
