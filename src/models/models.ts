export interface IJobsContext {
  jobs: IJob[];
  loading: boolean;
  selectedJob: IJob;
  error: boolean;
  setSelectedJob: (job: IJob) => void;
  getJobs: () => void;
}

export interface IApiResponse {
    id: number;
    benefits: [];
    catogories: [];
    company: ICompany;
    contact: IContact;
    departaments: [];
    descr: string;
    employment_type: string;
    experience: string;
    from_date: string;
    function: string;
    language: string;
    linkedInCompanyId: number;
    locations: ILocations[];
    slug: string;
    title: string;
    to_date: null;
    urls: IUrls;
    video: IVideo;
    internal_reference: null;
    owner: IOwner;
    skills: string;
    layers_1: [];
    layers_2: [];
    layers_3: [];
    layers_4: [];
    layers_5: [];
  }
  
  export interface IJob {
    id: number;
    company: ICompany;
    contact: IContact;
    descr: string;
    employment_type: string;
    experience: string;
    from_date: string;
    function: string;
    language: string;
    title: string;
    urls: IUrls;
    owner: IOwner;
    skills: string;
    locations: ILocations[];
  }
  
  export interface ICompany {
    id: number;
    slug: string;
    name: string;
    name_internal: string;
    website: string;
    industry: string;
    descr: string;
    logo: string;
    cover: string;
  }
  
  export interface IContact {
    name: string;
    email: string;
    phone: string;
    photo: string;
  }
  
  export interface ILocations {
    location: {
      text: string;
      area_2_short?: string;
      city?: string;
      area_1_short?: string;
      area_2?: string;
      area_1?: string;
      country?: string;
      city_short?: string;
      url?: string;
      place_id?: string;
    };
  }
  
  export interface IUrls {
    ad: string;
    apply: string;
  }
  
  export interface IVideo {
    content: null;
    url: string;
  }
  
  export interface IOwner {
    id: number;
    name: string;
    email: string;
  }
  export interface IList extends IEmptyList {
    jobs: IJob[];
    setSelectedJob: (job: IJob) => void;
    loading: boolean;
  }
  
  export interface IEmptyList {
    error: boolean;
  }

  export interface IJobInfo {
    job: IJob;
    loading: boolean;
    error: boolean;
  }
  
  export interface IJobInfoStyle {
    hide: boolean;
  }

  export interface ISelect {
    options: ISelectOption[];
    onChange: (value: string) => void;
    disabled?: boolean;
  }
  
  export interface ISelectOption {
    id: number;
    label: string;
    value: string;
  }
  
  