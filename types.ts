interface HeroSection {
  my_name: string;
  job_title: string;
  title_description: string;
  experience_years: string
  projects_completed_count: string
  skills: object
  social_media: object
}

interface Project {
  title: string;
  description: string;
  github_repo: string;
  project_url: string;
  tags?: string[];
  pictures?: string[];
};