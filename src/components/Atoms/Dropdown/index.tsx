import React from 'react';
import { ISelect } from '../../../models/models';

import { DropdownContainer, DropdownCustomized } from './styles';

const Dropdown: React.FC<ISelect> = ({ options, onChange, disabled }) => {
    return (
        <DropdownContainer data-testid="dropdown_container">
            <DropdownCustomized 
             onChange={(e) => onChange(e.currentTarget.value)}
             defaultValue=""
             disabled={disabled}
             data-testid="dropdown"
            >
                <option value="" hidden data-testid="default_option">
                    Sort by:
                </option>
                {options.map(({ label, value }) => {
                    return (
                        <option key={value} value={value} data-testid='option'>
                            {label}
                        </option>
                    )
                })}
            </DropdownCustomized>
        </DropdownContainer>
    )
}

export default Dropdown;