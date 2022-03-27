export interface IMenuOption {
    id: number;
    label: string;
    icon?: JSX.Element;
    route: string;
}

export interface IMenuSelected {
    selected: boolean;
}

export interface IMenuOptions {
    options: IMenuOption[];
}