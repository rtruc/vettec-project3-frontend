import axios from "axios";
import { useDispatch } from "react-redux";
import { clearInventory, updateInventory } from "../../../redux/actions/actions";
import { DropDownMenuStyle } from "./DropDownMenuStyle";


interface DropDownMenuProps {
    value?: string | number | readonly string[] | undefined;
    // selectionEvent?: (arg0: number | string) => {};
    children?: React.ReactNode;
}


export const WarehouseMenu: React.FC<DropDownMenuProps> = ({ children}) =>{

    const dispatch = useDispatch();

    return (
        <DropDownMenuStyle onChange={({target}) => { 
            if(target.value === "") {
                dispatch(clearInventory())
            }
            else {
                axios.get(`http://localhost:8080/warehouses/${target.value}`)
                     .then(({data}) => dispatch(updateInventory(data)))}}}       
        >
                         
            <option value=""></option>
            {children}
        </DropDownMenuStyle>
    )
}