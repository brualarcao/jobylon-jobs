import React, { useCallback, useRef } from 'react';
import { InputSearchContainer, InputSearch } from './styles'
import * as Atoms from '../../Atoms';

import { InputSearchProps } from './interfaces';

const SearchInput: React.FC<InputSearchProps> = ({ handleSearch, placeholder, ...props }) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleOnClick = useCallback(() => {
        if (inputRef.current) {
          !!inputRef.current.value && handleSearch(inputRef.current.value);
          inputRef.current.value = '';
        }
      }, [inputRef.current, handleSearch]);

      return (
          <InputSearchContainer datat-testid="input_search">
              <InputSearch 
                ref={inputRef}
                placeholder={placeholder}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
                data-testid="input_search_field"
              />
              <Atoms.Button
                width={'15%'}
                height={'100%'}
                onClick={handleOnClick}
                disabled={props.disabled}
                datat-testid="button_search"
              >
                  Search
              </Atoms.Button>
          </InputSearchContainer>
      )
}

export default SearchInput;