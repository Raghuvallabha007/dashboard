import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {fetchDataByPost} from 'services/AxiosService';

export const initialState = {
	loading: false,
	message: '',
	// showMessage: false,
	// redirect: '',
	// token: localStorage.getItem(AUTH_TOKEN) || null
    usersList: {},
    userProfileVisible: false,
    selectedUser: null
}

export const getAllUsers = createAsyncThunk('admin/getUsers',async (data, { rejectWithValue }) => {
	try {
		const response = await fetchDataByPost('/admin/getUsers', data)
		return response;
	} catch (err) {
		return rejectWithValue(err.response?.data?.message || 'Error')
	}
})


export const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllUsers.pending, (state) => {
				state.loading = true
			})
			.addCase(getAllUsers.fulfilled, (state, action) => {
				state.loading = false
				// state.redirect = '/'
				state.usersList = action.payload
			})
			.addCase(getAllUsers.rejected, (state, action) => {
				// state.message = action.payload
				state.usersList = {}
				state.loading = false
			})
	},
})

// export const {} = usersSlice.actions

export default usersSlice.reducer