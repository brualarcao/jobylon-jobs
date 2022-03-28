import React from 'react';
import { ISelect } from '../../../models/models';

import { DropdownContainer, DropdownCustomized } from './styles';

const Dropdown: React.FC<ISelect> = ({ options, onChange, disabled }) => {
    return (
        <DropdownContainer>
            <DropdownCustomized 
             onChange={(e) => onChange(e.currentTarget.value)}
             defaultValue=""
             disabled={disabled}
             data-testid="dropdown_container"
            >
                <option value="" hidden data-testid="default_option">
                    Sort by:
                </option>
                {options.map(({ label, value }) => {
                    return (
                        <option key={value} value={value} data-testid={`option_${label}`}>
                            {label}
                        </option>
                    )
                })}
            </DropdownCustomized>
        </DropdownContainer>
    )
}

export default Dropdown;