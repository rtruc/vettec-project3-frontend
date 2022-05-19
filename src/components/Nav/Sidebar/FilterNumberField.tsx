import styled from "styled-components";

const FilterNumberFieldDiv = styled.input.attrs({type: 'number'})`
    
`

interface FilterNumberFieldProps {

}

export const FilterNumberField: React.FC<FilterNumberFieldProps> = () => {

    return (
        <FilterNumberFieldDiv defaultValue={'0'} min={'1'} max={'999'} />
    )
} 