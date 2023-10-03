import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  confirmed: false
}

export const createOrder = createAsyncThunk(
  'createOrder',
  async () => {
    const res = await fetch('https://mocki.io/v1/ef0ab56e-437a-4833-999d-8cc5803101ea')
    const data: { success: boolean } = await res.json()

    if (!data.success) {
      throw new Error('Something goes wrong')
    }
  }
)

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    resetOrder() {
      return initialState
    }
  },
  extraReducers(builder) {
    builder.addMatcher(
      createOrder.pending.match,
      () => {
        return {
          loading: true,
          confirmed: false
        }
      }
    )

    builder.addMatcher(
      createOrder.fulfilled.match,
      () => {
        return {
          loading: false,
          confirmed: true
        }
      }
    )

    builder.addMatcher(
      createOrder.rejected.match,
      () => {
        return {
          loading: false,
          confirmed: false
        }
      }
    )
  }
})

export const { resetOrder } = orderSlice.actions
