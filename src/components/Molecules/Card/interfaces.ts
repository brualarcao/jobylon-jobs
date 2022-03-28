import { ICompany, ILocations } from "../../../models/models";

export interface ICard extends React.HTMLProps<HTMLButtonElement> {
    company: ICompany;
    locations: ILocations;
    employment_type: string;
    experience: string;
    title: string;
    selectedJobId: number;
    loading: boolean;
  }
  
  export interface ICardStyles {
    selected: boolean;
  }
  