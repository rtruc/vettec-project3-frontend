import React from "react";
import styled from "styled-components";
import { Inventory } from "../../model/inventory";
import { MiniItemDisplayCardProps } from "./MiniItemDisplayCard";

const LargeRecordContainer = styled.div`
    
`

export interface ItemDisplayCard {
    record: Inventory;
}

export const ItemDisplayCard: React.FC<MiniItemDisplayCardProps> = ({record}) => {


    return (
        <>
        </>
    )
}