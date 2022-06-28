import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { theme } from "../../css/theme";
import { Inventory } from "../../model/inventory";
import { displayLargeItemView } from "../../redux/actions/actions";
import { DateField } from "./Fields/DatePicker";

const MiniRecordContainer = styled.div`
    display:flex;
    flex-direction: row;
    align-items:center;

    position:relative;
    
    background-color: ${theme.item_BackgroundColor};
    min-width: 300px;
    max-width: 300px;
    max-height: 200px;

    padding: 5px;
    transition: all 0.2s ease;

    font-family: 'Lato', sans-serif;
    font-size:13px;

    cursor: pointer;
    
    // WEBKIT DOESN'T APPLY BORDER-RADIUS TO OUTLINES...
    // USING HARD DROP SHADOW INSTEAD
    border-radius:5px;
    box-shadow: 0 0 0 .75pt ${theme.item_BorderShadowColor};

    &:hover, &:focus{
        box-shadow: 0 0 0 1.75pt ${theme.item_BorderShadowColor_HoverFocus};
    }
`

const LargeRecordContainer = styled(MiniRecordContainer)`

`

const TextColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    gap: 2px;
    flex-grow: 100;
`

const TextRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom:2px;
`

const Title = styled.h4`
    margin:0;
    margin-right: 3px;
`
const EntrySingleLine = styled.span`
    white-space: nowrap;
    overflow:hidden;
    max-width: 166px;
    text-overflow:ellipsis;
    /* word-wrap:break-word; */
    /* overflow-x: scroll; */
`

const Image = styled.img`
    max-height:100px;
    display:flex;
    flex-grow:0;
    
    margin-right:8px;
    margin-left:1px;
    border-radius: 10px;
`

const baseURL = `${process.env.REACT_APP_PHOTO_URL}/`

export interface MiniItemDisplayCardProps {
    record: Inventory;
}


export const MiniItemDisplayCard: React.FC<MiniItemDisplayCardProps> = ({ record }) => {

    const { item, quantity, inventoryDate } = record;

    const dispatch = useDispatch();

    const imageURL = item.imageURL !== null   ? baseURL + item.imageURL      :
                     item.itemType === "book" ? baseURL + "generic_book.jpg" :
                     baseURL + "generic_beer.jpg";

    return (


        <MiniRecordContainer onClick={() => dispatch(displayLargeItemView(record))}>

            <Image alt={record.item.itemName} src={imageURL} />

            <TextColumn>
                <TextRow>
                    <Title>{item.itemType === 'book' ? "TITLE: " : "NAME: "} </Title>
                    <EntrySingleLine> {item.itemName} </EntrySingleLine>
                </TextRow>

                <TextRow>
                    <Title>{item.itemType === 'book' ? "AUTHOR: " : "BREWERY: "} </Title>
                    <EntrySingleLine> {item.brand.brandName}</EntrySingleLine>
                </TextRow>

                <TextRow>
                    <Title>QUANTITY: </Title>
                    <EntrySingleLine>{quantity}</EntrySingleLine>
                </TextRow>

                <TextRow>
                    <Title>SIZE: </Title>
                    <EntrySingleLine>{item.unitVolume}</EntrySingleLine>
                </TextRow>


                <TextRow>
                    <Title>TOTAL SPACE: </Title>
                    <EntrySingleLine>{item.unitVolume * quantity}</EntrySingleLine>
                </TextRow>

                {/* <TextRow>
                    <Title>{item.itemType === 'book' ? "PUBLISHED: " : "EXPIRATION: "} </Title>
                    <DateField isDisabled={true} date={inventoryDate} />
                </TextRow> */}
            </TextColumn>

        </MiniRecordContainer>
    )
}