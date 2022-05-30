import axios from "axios";
import { useDispatch } from "react-redux";
import { clearInventory, updateInventory, updateSelectedWarehouse } from "../../../redux/actions/actions";
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
                dispatch(clearInventory())
            }
            else {
                const warehouseID: number = parseInt(target.value);
                // console.log(warehouseID)
                dispatch(updateSelectedWarehouse(warehouseID));
                axios.get(`${ process.env.REACT_APP_REST_URL}/warehouses/${warehouseID}`)
                     .then(({data}) => dispatch(updateInventory(data)))
                //  .then((target.value) => dispatch(updateSelectedWarehouse(value)))
            }
        }
        }
        >

            <option value=""></option>
            {children}
        </DropDownMenu>
    )
}