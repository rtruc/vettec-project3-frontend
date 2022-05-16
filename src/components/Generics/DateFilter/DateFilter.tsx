import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { toggleDateFilter, updateDateFilter } from "../../../redux/actions/actions";
import { DateFilterPicker } from "./DateFilterPicker";
import { CheckBox } from "../Buttons/CheckBox";
import { State } from "../../../redux/state";


const DateFilterDiv = styled.form`
        display: flex;
        align-items: center;

        margin-left: 10px;
`

const DateFilterPickerColumn = styled.div`
    display: flex;
    flex-direction: column;
`


export const DateFilter = () => {
    const { earlier, later } = useSelector((state: State) => state.dateRange);
    const dispatch = useDispatch();

    return (
        <DateFilterDiv >
            <DateFilterPickerColumn>
                <DateFilterPicker required defaultValue={later}
                    onChange={(e) => dispatch(updateDateFilter(e.target.value, 'later'))} />
                <DateFilterPicker required defaultValue={earlier}
                    onChange={(e) => dispatch(updateDateFilter(e.target.value, 'earlier'))} />
            </DateFilterPickerColumn>
            <CheckBox clickEvent={() => dispatch(toggleDateFilter())} />
        </DateFilterDiv>

    )
}