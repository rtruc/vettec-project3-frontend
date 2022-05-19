import styled from "styled-components";
import { useSelector } from "react-redux";
import { State } from "../../redux/state";
import { Inventory } from "../../model/inventory";
import { ItemDisplayCard } from "../InventoryItem/ItemDisplayCard";
import { inventoryFilter } from "../../util/inventoryFilters";

const ListDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    margin-left: 180px;
    margin-right: 180px;

    gap: 10px;

    z-index:0;
    
    padding-top: 50px;
    padding-bottom: 60px;
`

export const InventoryList: React.FC = () => {

    let { inventory, filters } = useSelector((state: State) => state);

    let workingSet:  Inventory[] = inventory;
    let filteredSet: Inventory[] = [];

    filters.forEach((filter: inventoryFilter) => {
        filteredSet = [];
        filteredSet.push(...workingSet.filter(task => filter(task)));
        workingSet = filteredSet;
    } )

    return (
        <ListDiv>
            {workingSet.map((item) => {
                return (
                    <ItemDisplayCard key={item.inventoryID} record={item} />
                )
            })}
        </ListDiv>
    );

}
