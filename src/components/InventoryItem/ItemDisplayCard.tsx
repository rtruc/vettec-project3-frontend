import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { theme } from "../../css/theme";
import { Inventory } from "../../model/inventory";
import { dismissLargeItemView } from "../../redux/actions/actions";
import { CloseButton } from "./Buttons/CloseButton";
import { DeleteButton } from "./Buttons/DeleteButton";
import { DateField } from "./Fields/DatePicker";
import { MiniItemDisplayCardProps } from "./MiniItemDisplayCard";


const ShadowBox = styled.div`
    background:rgba(0, 0, 0, 0.455);

    position: fixed;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;

    z-index:10;

    pointer-events: none;
    transition: background-color 0.25s ease-in-out;

    pointer-events: fill;

    /* overflow:hidden; */
`

const RecordContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -400px;
    /* margin-left: 0%; */
    width: 800px;
    height: 400px;

    z-index: 11;

    display:flex;
    flex-direction: row;
    align-items:flex-start;

    font-size:20px;

    /* position:relative; */
    
    background-color: ${theme.task_BackgroundColor};
    /* min-width: 800px; */
    /* max-width: 300px; */
    /* max-height: 200px; */

    /* padding: 5px; */
    /* transition: all 0.2s ease; */

    /* cursor: pointer; */
    
    // WEBKIT DOESN'T APPLY BORDER-RADIUS TO OUTLINES...
    // USING HARD DROP SHADOW INSTEAD
    border-radius:10px;
    box-shadow: 0 0 0 .75pt ${theme.task_BorderShadowColor};
`

const ImageColumn = styled.div`
    display: flex;
    flex-direction: column;
`

const TextColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    gap: 2px;
    flex-grow: 100;
    height: 400px;
    margin-top: 15px;
    margin-right: 15px;
`

const TextRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
const OuterRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`



const Title = styled.h4`
    margin:0;
    margin-right: 10px;
`

const TextInput = styled.input.attrs({ type: 'text' })`
    background-color: inherit;
    border: none;
    /* cursor: pointer; */

    font-family: 'Lato', sans-serif;
    font-size:inherit;

    display:flex;
    flex-grow:100;
    :disabled {
        color: black;
    }
`

// const LargeTextInput = styled.input.attrs({ type: 'textarea'})`
const LargeTextInput = styled.textarea`
    height:200px;
    /* display:flex; */
    /* flex-grow: 80; */
    background-color:inherit;
    border:none;
    font-family: 'Lato', sans-serif;
    /* font-weight:bolder; */
    font-size:inherit;
    color:black;
    resize: none;
`


const NumberInput = styled.input.attrs({ type: 'number' })`
    background-color: inherit;
    border: none;
    /* cursor: pointer; */
    font-size:inherit;
    
    width: 80px;
    font-family: 'Lato', sans-serif;
    :disabled{
        color:black;
    }
`

const Image = styled.img`
    max-height:300px;
    display:flex;
    flex-grow:0;
    
    margin-top:15px;
    margin-right:15px;
    margin-left:20px;
    border-radius: 10px;
`
const baseURL = `${process.env.REACT_APP_PHOTO_URL}/`

export interface ItemDisplayCard {
    record: Inventory;
}

export const ItemDisplayCard: React.FC<MiniItemDisplayCardProps> = ({ record }) => {

    const { item, quantity, inventoryDate } = record;
    // console.log(record.item.imageURL);

    const dispatch = useDispatch();
    const clickedCloseButton = () => dispatch(dismissLargeItemView())


    const imageURL = item.imageURL !== null ? baseURL + item.imageURL : item.itemType === "book" ? baseURL + "generic_book.jpg" : baseURL + "generic_beer.jpg";

    return (
        <ShadowBox>

            <RecordContainer>
                <CloseButton clickEvent={clickedCloseButton} />

                <ImageColumn>
                    <Image src={imageURL} />
                    <DeleteButton />
                </ImageColumn>

                <TextColumn>
                    <TextRow>
                        <Title>{item.itemType === 'book' ? "TITLE: " : "NAME: "} </Title>
                        <TextInput disabled defaultValue={item.itemName} />
                    </TextRow>

                    <TextRow>
                        <Title>{item.itemType === 'book' ? "AUTHOR: " : "BREWERY: "} </Title>
                        <TextInput disabled defaultValue={item.brand.brandName} />
                    </TextRow>

                    <TextRow>
                        <Title>QUANTITY: </Title>
                        <NumberInput onChange={() => console.log("CHANGE!")} defaultValue={quantity} />
                    </TextRow>

                    <TextRow>
                        <Title>SIZE: </Title>
                        <NumberInput disabled defaultValue={item.unitVolume} />
                    </TextRow>

                    <TextRow>
                        <Title>TOTAL SPACE: </Title>
                        <NumberInput disabled defaultValue={item.unitVolume * quantity} />
                    </TextRow>

                    <TextRow>
                        <Title>{item.itemType === 'book' ? "PUBLISHED: " : "EXPIRATION: "} </Title>
                        <DateField isDisabled={true} date={inventoryDate} />
                    </TextRow>

                    {/* <LargeTextInput  disabled defaultValue={item.description} /> */}
                    <LargeTextInput disabled value={item.description} />
                    {/* <textarea value={item.description} /> */}
                    {/* <LargeTextInput>{item.description}</LargeTextInput> */}
                </TextColumn>
            </RecordContainer>

        </ShadowBox>

    )
}