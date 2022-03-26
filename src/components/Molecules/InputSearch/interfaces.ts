export interface InputSearchProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    handleSearch: (value: string) => void;
  }