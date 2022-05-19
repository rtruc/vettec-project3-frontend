import styled from "styled-components";


const Row = styled.div`
    display: flex;
    flex-direction: row;
`
export interface FieldBundleProps {
    children?: React.ReactNode;
}

export const FieldBundler: React.FC<FieldBundleProps> = ({children}) => {

    return(
        <Row>
            {children}
        </Row>
    )
}