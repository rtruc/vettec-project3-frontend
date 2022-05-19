import { useDispatch } from "react-redux";
import styled, { StyledComponent } from "styled-components";
import { deleteTask, editDate, toggleCompletionStatus } from "../../redux/actions/actions";
import { convertDateToJSONCompliantString, discardTime } from "../../util/taskData";
import { Task } from "../../model/task";
import { theme } from "../../css/theme";
// import { CheckBox } from "../Common/CheckBox";
import { InventoryDatePicker } from "./InventoryDatePicker";
import { DeleteButton } from "../Generics/Buttons/DeleteButton";
import { Inventory } from "../../model/inventory";
import { Item } from "../../model/item";
import { EditableText } from "./Fields/EditableText";
import { DateField } from "./Fields/DatePicker";
// import { EditableText } from "./InventoryEditableText";

const Column = styled.div`
    display: flex;
    flex-direction: column;
    `
const ColumnRight = styled.div`
    display: flex;
    flex-direction: column;
    align-items:flex-end;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const RecordContainer = styled.div`
    display:flex;
    flex-direction: row;
    gap:5px;
    align-items:center;

    position:relative;
    
    background-color: ${theme.task_BackgroundColor};
    min-width: 300px;
    max-width: 60%;
    max-height: 200px;

    padding: 5px;

    transition: all 0.2s ease;
    
    // WEBKIT DOESN'T APPLY BORDER-RADIUS TO OUTLINES...
    // USING HARD DROP SHADOW INSTEAD
    border-radius:5px;
    box-shadow: 0 0 0 .75pt ${theme.task_BorderShadowColor};

    &:hover, &:focus{
        /* filter: saturate(1.95); */
        box-shadow: 0 0 0 1.75pt ${theme.task_BorderShadowColor_HoverFocus};
        /* transform: scale(1.025); */
    }
`

const Title = styled.h4`
    margin:0;
    height: 22px;
`

const TextField = styled.input.attrs({ type: 'text' })`
    background-color: inherit;
    border: none;
    cursor: pointer;
    height: 20px;
    max-width: 500px;
    /* display:flex; */
`
const LargeTextField = styled.input.attrs({ type: 'text' })`
    background-color: inherit;
    border: none;
    cursor: pointer;
    height: 20px;
`

const NumberField = styled.input.attrs({ type: 'number' })`
        background-color: inherit;
    border: none;
    cursor: pointer;
    height: 20px;

`

export interface ItemDisplayCardProps {
    record: Inventory;
}

export const ItemDisplayCard: React.FC<ItemDisplayCardProps> = ({ record }) => {

    const { item, quantity, inventoryDate } = record;

    return (
       

        <RecordContainer>
            <Column>
                <Row>
                    <Title>{item.itemType === 'book' ? "TITLE: " : "NAME: "} </Title> 
                    <TextField defaultValue={item.itemName} />
                </Row>
                <Row>
                    <Title>TYPE: </Title> 
                    <TextField defaultValue={item.itemType} />
                </Row>
                <Row>
                    <Title>{item.itemType === 'book' ? "AUTHOR: " : "BREWERY: "} </Title> 
                    <TextField defaultValue={item.brand.brandName} />
                </Row>

                <Row>
                    <Column>
                        <Title>AMOUNT: </Title> 
                        <Title>SIZE: </Title> 
                    </Column>
                    <Column>
                        <NumberField defaultValue={quantity} />
                        <NumberField defaultValue={item.unitVolume} />
                    </Column>
                    <Column>
                        <Title>{item.itemType === 'book' ? "PUBLISHED: " : "EXPIRATION: "} </Title> 
                        <Title>TOTAL SPACE: </Title> 
                    </Column>
                    <Column>
                        <DateField date={inventoryDate} />
                        <NumberField defaultValue={item.unitVolume * quantity} />
                    </Column>
                </Row>

                <Column>
                    {/* <Title>DESCRIPTION</Title> */}
                    <LargeTextField defaultValue={item.description} />
                </Column>
            </Column>
        </RecordContainer>
    )
}