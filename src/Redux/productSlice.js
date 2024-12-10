import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name : "productSlice",
    initialState : [
        {name : "Ramesh", id : "1001", num : "12345556"},
        {name : "Suresh", id : "1002", num : "124546556"},
        {name : "Mahesh", id : "1003", num : "123453356"},
        {name : "Kamlesh", id : "1004", num : "12365456"}
    ],
    reducers : {}
});

export default productSlice.reducer;