import styled from "styled-components";
import { useDispatch } from "react-redux";


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
    // const { earlier, later } = useSelector((state: State) => state.dateRange);
    const dispatch = useDispatch();

    return (
        <DateFilterDiv >
            <DateFilterPickerColumn>
                {/* <DateFilterPicker required defaultValue={later} */}
                    {/* onChange={(e) => dispatch(updateDateFilter(e.target.value, 'later'))} /> */}
                {/* <DateFilterPicker required defaultValue={earlier} */}
                    {/* onChange={(e) => dispatch(updateDateFilter(e.target.value, 'earlier'))} /> */}
            </DateFilterPickerColumn>
            {/* <CheckBox clickEvent={() => dispatch(toggleDateFilter())} /> */}
        </DateFilterDiv>

    )
}