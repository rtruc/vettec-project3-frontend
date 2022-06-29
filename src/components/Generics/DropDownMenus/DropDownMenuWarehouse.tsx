import axios from "axios";
import { useDispatch } from "react-redux";
import { clearStateInvRecords, updateStateInvRecords, updateActiveWarehouse } from "../../../redux/actions/actions";
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
                dispatch(clearStateInvRecords())
            }
            else {
                const warehouseID: number = parseInt(target.value);

                dispatch(clearStateInvRecords())
                // dispatch(updateSelectedWarehouse(warehouseID));
                
                warehouseService.getWarehouseInventoryRecords(warehouseID)
                     .then(data => dispatch(updateStateInvRecords(data)))
                     .then(() => dispatch(updateActiveWarehouse(warehouseID)))
            }
        }
        }
        >

            <option value=""></option>
            {children}
        </DropDownMenu>
    )
}