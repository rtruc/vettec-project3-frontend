export const sortTitlesAscending    = ()                  => ({ type: 'SORT_ALPHA_UP'});
export const sortTitlesDescending   = ()                  => ({ type: 'SORT_ALPHA_DOWN'});
export const sortDatesAscending     = ()                  => ({ type: 'SORT_DATE_UP'});
export const sortDatesDescending    = ()                  => ({ type: 'SORT_DATE_DOWN'});

export const addTask                = (pathName: string)          => ({ type: 'ADD_TASK', pathName: pathName});

export const toggleCompletionStatus = (_id: string)               => ({ type: 'CHECKBOX_CLICKED', _id: _id});
export const deleteTask             = (_id: string)               => ({ type: 'DELETE_TASK', _id: _id});
export const editTitle              = (_id: string, textUpdate: string)   => ({ type: 'EDIT_TITLE', _id: _id, textUpdate  : textUpdate});
export const editDate               = (_id: string, dateUpdate: string)   => ({ type: 'EDIT_DATE',  _id: _id, dateUpdate  : dateUpdate});

export const toggleDateFilter       = ()                  => ({ type: 'TOGGLE_DATE_FILTER'});
export const updateDateFilter       = (newDate: string, dateType: string) => ({ type: 'UPDATE_DATE_FILTER', newDate: newDate, dateType: dateType});

export const searchTitles           = (searchText: string)        => ({ type: 'SEARCH_TITLES', searchText: searchText });