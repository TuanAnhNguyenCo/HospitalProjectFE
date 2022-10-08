import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";


const api = process.env.REACT_APP_API


const init = {
    userInfo: "",
    LoginStatus: false
}


const usersSlice = createSlice({
    name: 'users',
    initialState: init,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(fetchGetUser.fulfilled, (state, action) => {
            [state.LoginStatus, state.userInfo] = action.payload
        })

    }
}
)
export const fetchGetUser = createAsyncThunk('users/info', async () => {

    const res = await fetch(`${api}/user`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${localStorage.getItem("hs_token")}`
        }
    })

    if (res.status === 200)
    {
        const data = await res.json()
        return [true, data]
    }
    return [false, null]
})



export default usersSlice