export interface IMenuOption {
    id: number;
    label: string;
    icon?: JSX.Element;
    route: string;
}

export interface IMenuSelected {
    selected: boolean;
    open?: boolean;
}

export interface IMenuOptions {
    options: IMenuOption[];
    open?: boolean;
}

export interface ContainerProps {
    open?: boolean;
}