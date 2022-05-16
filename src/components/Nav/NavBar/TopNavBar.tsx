import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addTask } from "../../../redux/actions/actions";
import { DateFilter } from "../../Generics/DateFilter/DateFilter";
import { SearchForm } from "../../Generics/SearchForm";
import { NavBarButton } from "../../_archived/Header/NavBarButton"
import { NavItem } from "../../_archived/Header/NavItem";
import { ActiveNavLink, NavLink } from "../../_archived/Header/NavLink";
import { NavBar } from "./NavBar";
import { NavBarBundle } from "./NavBarBundle";


const navEntries = [
    { url: "/", name: "ToDo" },
    { url: "/completed", name: "Completed" },
    { url: "/all", name: "All" },
]

export const TopBar = () => {


    const dispatch = useDispatch();
    let pathname = useLocation().pathname;

    // const children = <>
    //     <DateFilter />
    //     {navEntries.map((entry, index) => {
    //         return (
    //             <NavItem key={index}>
    //                 {entry.url === pathname ? <ActiveNavLink to={entry.url}>{entry.name}</ActiveNavLink> :
    //                     <NavLink to={entry.url}>{entry.name}</NavLink>}
    //             </NavItem>
    //         );
    //     })}
    //     <NavBarButton onClick={() => dispatch(addTask(pathname))}>+</NavBarButton>

    //     <SearchForm />
    // </>



    return (
        <>

            {/* <NavBar children={children} /> */}

            {/* <NavBar>
                {children}
            </NavBar> */}

            <NavBar additionalStyle="top: 0">
                <DateFilter />
                
                <NavBarBundle>
                {navEntries.map((entry, index) => {
                    return (
                        <NavItem key={index}>
                            {entry.url === pathname ? <ActiveNavLink to={entry.url}>{entry.name}</ActiveNavLink> :
                                <NavLink to={entry.url}>{entry.name}</NavLink>}
                        </NavItem>
                    );
                })}

                <NavBarButton onClick={() => dispatch(addTask(pathname))}>+</NavBarButton>
                </NavBarBundle>

                <SearchForm />
            </NavBar>

        </>
    )
}
