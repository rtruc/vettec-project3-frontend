import { Inventory } from "../../../model/inventory"
import { EditableText } from "./EditableText";
import { FieldTitle } from "./FieldTitle";


interface NameProps {
    record: Inventory;
    title: string;
}

export const TextBundle: React.FC<NameProps> = ({record, title}) => {

    return(
        <>
            <FieldTitle>{title}</FieldTitle>
            <EditableText></EditableText>
        </>
    )
}