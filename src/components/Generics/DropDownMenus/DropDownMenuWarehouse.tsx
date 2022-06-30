import { useDispatch } from "react-redux";
import { updateStateInvRecords, updateActiveWarehouse } from "../../../redux/actions/actions";
import warehouseService from "../../../services/warehouse.service";
import { DropDownMenu } from "./DropDownMenu";


interface DropDownMenuProps {
    value?: string | number | readonly string[] | undefined;
    children?: React.ReactNode;
}


export const DropDownMenuWarehouse: React.FC<DropDownMenuProps> = ({ children }) => {

    const dispatch = useDispatch();

    return (
        <DropDownMenu onChange={({ target }) => {
            if (target.value === "") {
                dispatch(updateActiveWarehouse(null));
                dispatch(updateStateInvRecords([]));
            } else {
                const warehouseID: number = parseInt(target.value);

                // TODO: Loading indicator to cover server latency
                
                warehouseService.getInventoryRecordsForSelectedWarehouse(warehouseID)
                     .then(data => dispatch(updateStateInvRecords(data)))
                     .then(() => dispatch(updateActiveWarehouse(warehouseID)))
                     .catch(error => console.log("FAILED SELECTING NEW WAREHOUSE", error));
            }
        }
        }
        >

            <option value=""></option>
            {children}
        </DropDownMenu>
    )
}