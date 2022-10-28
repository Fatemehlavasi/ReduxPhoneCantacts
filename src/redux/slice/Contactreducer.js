import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {id:1 , name: "sara" , lastname: 'lavasani' , number:'05911' , email: "ddd@gmail.com" , city:'df' , contery:'iran' },
    {id:2 , name: "baran" , lastname: 'ahmadi' , number:'09511' , email: "ddd@gmail.com" , city:'df' , contery:'iran' },
    // {id:3 , name: "sahar" , lastname: 'lavasani' , number:'50911' , email: "ddd@gmail.com" , city:'df' , contery:'iran'},
    // {id:4 , name: "ali" , lastname: 'sarani' , number:'09151' , email: "ddd@gmail.com" , city:'df' , contery:'iran'},
    // {id:5 , name: "mamad" , lastname: 'lavasani' , number:'05911' , email: "ddd@gmail.com" , city:'df' , contery:'iran'},
]
    
export const contactstore = createSlice ({
    name:'contacts', 
    initialState,
    reducers:{

            addContact:(state , action)=>{
                const {payload} = action
                state.push(payload)
            },
            deletecontact: (state , action )=>{
                const {payload} = action
                const index = state.findIndex(state => state.id === payload) 
                state.splice(index , 1)
            },

            updateContact: (state, action) => {
                //action => {payload:object}
                const {payload} = action
                const index = state.findIndex(state => state.id === payload.id)
                state[index] = payload
            }, 

            checkCard: (state, action) => {
                const index = state.findIndex(item => item.id === action.payload)
                state[index].state = !state[index].state
    
            },
    }
})
  
export const { deletecontact , addContact , updateContact , checkCard} = contactstore.actions
export default contactstore.reducer 