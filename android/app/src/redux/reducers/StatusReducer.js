import { createSlice } from "@reduxjs/toolkit";
import { addStatusAPI, deleteStatusApi, updateStatusApi,fetchStatus } from "../actions/StatusAction";
const initialState = {
    listStatus :[] // chứa danh sách công việc
}
const statusSlice = createSlice({
    name : 'status',
    initialState,
    reducers:{
        addStatus (state, action){
            state.listStatus.push( action.payload );
        },
          deleteStatus (state, action){
            state.listStatus = state.listStatus.filter(row => row.id !== action.payload);
 },updateStatus (state, action){
    // lấy tham số truyền vào
    const {id, title,content,date} = action.payload;
    // tìm bản ghi phù hợp với tham số truyền vào
    const status = state.listStatus.find(row => row.id === id);
    // update
    if(status){
        status.title = title; // gán giá trị
     
        status.content = content; // gán giá trị
        status.date = date; // gán giá trị
      
    }
}
       
        
    },
    extraReducers: builder => {
      // đây là chỗ để viết các thao tác mở rộng, xử lý các trạng thái của promise
      builder.addCase(deleteStatusApi.fulfilled, (state, action) => {
         // Xóa todo
          state.listStatus = state.listStatus.filter(row => row.id !== action.payload);
         
     }) .addCase(deleteStatusApi.rejected, (state, action) => {
         // Xử lý khi yêu cầu xóa todo bị từ chối hoặc xảy ra lỗi
         console.log('Delete todo rejected:', action.error.message);
     });

     builder.addCase(addStatusAPI.fulfilled, (state, action)=>{
       console.log(action.payload);
         state.listStatus.push(action.payload);
     })
    .addCase(addStatusAPI.rejected, (state, action) => {
       // Xử lý khi yêu cầu thêm todo bị từ chối hoặc xảy ra lỗi
       console.log('Add todo rejected:', action.error.message);
       builder.addCase(updateStatusApi.fulfilled, (state, action)=>{
        // lấy tham số truyền vào
        // console.log(action);
        const { id, title,content,date } = action.payload;
        // tìm bản ghi phù hợp với tham số truyền vào
        const status = state.listStatus.find(row => row.id === id);
        // update
        if (status ) {
            status.title = title; // gán giá trị
            
        status.content = content; // gán giá trị
        status.date = date; // gán giá trị
        }
  })
  .addCase(updateStatusApi.rejected, (state, action) => {
        // Xử lý khi yêu cầu Sửa todo bị từ chối hoặc xảy ra lỗi
        console.log('Update todo rejected:', action.error.message);
});
});

 },
 
});

export const {addStatus,deleteStatus,updateStatus} = statusSlice.actions;
export default statusSlice.reducer;