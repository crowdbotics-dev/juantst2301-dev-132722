import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_rojo_list = createAsyncThunk(
  "rojos/api_v1_rojo_list",
  async payload => {
    const response = await apiService.api_v1_rojo_list(payload)
    return response.data
  }
)
export const api_v1_rojo_create = createAsyncThunk(
  "rojos/api_v1_rojo_create",
  async payload => {
    const response = await apiService.api_v1_rojo_create(payload)
    return response.data
  }
)
export const api_v1_rojo_retrieve = createAsyncThunk(
  "rojos/api_v1_rojo_retrieve",
  async payload => {
    const response = await apiService.api_v1_rojo_retrieve(payload)
    return response.data
  }
)
export const api_v1_rojo_update = createAsyncThunk(
  "rojos/api_v1_rojo_update",
  async payload => {
    const response = await apiService.api_v1_rojo_update(payload)
    return response.data
  }
)
export const api_v1_rojo_partial_update = createAsyncThunk(
  "rojos/api_v1_rojo_partial_update",
  async payload => {
    const response = await apiService.api_v1_rojo_partial_update(payload)
    return response.data
  }
)
export const api_v1_rojo_destroy = createAsyncThunk(
  "rojos/api_v1_rojo_destroy",
  async payload => {
    const response = await apiService.api_v1_rojo_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const rojosSlice = createSlice({
  name: "rojos",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_rojo_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_rojo_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rojo_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rojo_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_rojo_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rojo_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rojo_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_rojo_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rojo_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rojo_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_rojo_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rojo_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rojo_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_rojo_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rojo_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rojo_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_rojo_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_rojo_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_rojo_list,
  api_v1_rojo_create,
  api_v1_rojo_retrieve,
  api_v1_rojo_update,
  api_v1_rojo_partial_update,
  api_v1_rojo_destroy,
  slice: rojosSlice
}
