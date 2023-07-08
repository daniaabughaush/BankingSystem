import { createSlice } from '@reduxjs/toolkit'

export const bankSlice = createSlice({
    name: 'Bank',
    initialState : {
        accounts : [
            {
                id: 1,
                customerName: "Israa Othman",
                accountNumber: "123456",
                accountType: "Savings"
            },
            {
                id: 2,
                customerName: "Ahmad Zahran",
                accountNumber: "987654",
                accountType: "Student accounts"
            }
        ]


    }
    ,
    reducers: {
   
    },
})
export const selectBank = (state) =>state.bank
console.log(selectBank);
export default bankSlice.reducer