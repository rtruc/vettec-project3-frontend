import styled from "styled-components";
import { useSelector } from "react-redux";
import { State } from "../../redux/state";
import { InventoryRecord } from "../../model/inventoryRecord";
import { MiniItemDisplayCard } from "../InventoryItem/ItemDisplayCard_Mini";
import { inventoryFilter } from "../../util/inventoryFilters";

const ListDiv = styled.div`
    display: flex;

    flex-direction: row;
    flex-wrap: wrap;
    
    /* align-items: center; */
    justify-content: center;
    margin: 0 auto;

    margin-left: 180px;
    margin-right: 10px;

    gap: 10px;

    z-index:0;
    
    padding-top: 65px;
    padding-bottom: 60px;

    overflow:hidden;
`



export const InventoryList: React.FC = () => {

    let { inventoryRecords: inventory, filters } = useSelector((state: State) => state);

    let workingSet: InventoryRecord[] = inventory;
    let filteredSet: InventoryRecord[] = [];

    filters.forEach((filter: inventoryFilter) => {
        filteredSet = [];
        filteredSet.push(...workingSet.filter(task => filter(task)));
        workingSet = filteredSet;
    })

    return (
        <ListDiv>
            {workingSet.map((item) => {
                return (
                    <MiniItemDisplayCard key={item.inventoryID} record={item} />
                )
            })}
        </ListDiv>
    );

}
