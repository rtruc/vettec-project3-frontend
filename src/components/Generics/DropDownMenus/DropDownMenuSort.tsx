import { useDispatch } from "react-redux";
import { sortInventory } from "../../../redux/actions/actions";
import { DropDownMenu } from "./DropDownMenu";


interface SortMenuProps {
    children?: React.ReactNode;
}


export const DropDownMenuSort: React.FC<SortMenuProps> = () =>{

    const dispatch = useDispatch();

    return (
        <DropDownMenu onChange={({target}) => dispatch(sortInventory(target.value))}>
            <option value="SORT_INV_ASC">Inv Order ↑</option>
            <option value="SORT_INV_DES">Inv Order ↓</option>
            <option value="SORT_TITLE_ASC">Title ↑</option>
            <option value="SORT_TITLE_DES">Title ↓</option>
            <option value="SORT_DATE_ASC">Date ↑</option>
            <option value="SORT_DATE_DES">Date ↓</option>
            <option value="SORT_TYPE_ASC">Type ↑</option>
            <option value="SORT_TYPE_DES">Type ↓</option>
            <option value="SORT_BRAND_ASC">Company ↑</option>
            <option value="SORT_BRAND_DES">Company ↓</option>
            <option value="SORT_AMT_ASC">Quantity ↑</option>
            <option value="SORT_AMT_DES">Quantity ↓</option>
            <option value="SORT_SIZE_ASC">Size ↑</option>
            <option value="SORT_SIZE_DES">Size ↓</option>
            <option value="SORT_SPACE_ASC">Total Space ↑</option>
            <option value="SORT_SPACE_DES">Total Space ↓</option>
        </DropDownMenu>
    )
}