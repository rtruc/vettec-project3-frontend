import axios from "axios";
import { useDispatch } from "react-redux";
import { clearInventory, updateInventory, updateSelectedWarehouse } from "../../../redux/actions/actions";
import { DropDownMenuStyle } from "./DropDownMenuStyle";


interface DropDownMenuProps {
    value?: string | number | readonly string[] | undefined;
    // selectionEvent?: (arg0: number | string) => {};
    children?: React.ReactNode;
}


export const WarehouseMenu: React.FC<DropDownMenuProps> = ({ children }) => {

    const dispatch = useDispatch();

    return (
        <DropDownMenuStyle onChange={({ target }) => {
            if (target.value === "") {
                dispatch(clearInventory())
            }
            else {
                const warehouseID: number = parseInt(target.value);
                console.log(warehouseID)
                dispatch(updateSelectedWarehouse(warehouseID));
                axios.get(`http://localhost:8080/warehouses/${warehouseID}`)
                     .then(({data}) => dispatch(updateInventory(data)))
                //  .then((target.value) => dispatch(updateSelectedWarehouse(value)))
            }
        }
        }
        >

            <option value=""></option>
            {children}
        </DropDownMenuStyle>
    )
}