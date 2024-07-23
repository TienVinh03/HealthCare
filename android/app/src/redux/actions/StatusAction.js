import { createAsyncThunk } from "@reduxjs/toolkit";
const api_url = 'https://666032f05425580055b2bd46.mockapi.io/Account';

import { addStatus } from '../reducers/StatusReducer';
export const fetchStatus = () => {
    return async dispatch => {
      try {
        const response = await fetch(api_url);
        const data = await response.json();
        // dữ liệu lấy được từ api về, duyệt mảng và lưu vào store của redux
         // console.log(data);
        data.forEach(row=> {
          //    dữ liệu server trả về dạng: {
          //     title: "title 1",
          //     status: false,
          //     id: "1"
          //     },
          dispatch(addStatus(row));  // trong ví dụ trước ở screen khi thêm sẽ sử dụng dispatch, ở ví dụ này cũng dùng lại cách đó
        });
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
   };
   export const deleteStatusApi = createAsyncThunk(
    'status/deleteStatusApi',
    async (id, thunkAPI) => {
      try {
        // Gửi yêu cầu DELETE đến API để xóa todo
        const response = await fetch(`${api_url}/${id}`, {
          method: 'DELETE',
        });
        // console.log(response);
        if (response.ok) {
            // console.log(response);
          // Sau khi xóa thành công, trả về id của todo đã xóa để cập nhật store
          // action.payload ở trong reducer sẽ chính là id
           return id; 
        } else {
          // Nếu có lỗi từ phía server, trả về lỗi cho reducer
          const errorData = await response.json();
          return thunkAPI.rejectWithValue(errorData);
        }
      } catch (error) {
        // Xử lý lỗi nếu có bất kỳ lỗi nào xảy ra 
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  export const addStatusAPI = createAsyncThunk(
    'status/addStatusAPI',
    async (objStatus, thunkAPI) => {
      console.log(objTodo);
      try {
        // Gửi yêu cầu DELETE đến API để xóa todo
        const response = await fetch(api_url, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(objStatus)
        });
        const data = await response.json();
        console.log(data);
        // console.log(response);
        // Kiểm tra nếu status code là 200 hoặc 204 thì xóa thành công
        if (response.ok) {
            // console.log(response);
          // Sau khi xóa thành công, trả về id của todo đã xóa để cập nhật store
           return data; 
        } else {
          // Nếu có lỗi từ phía server, trả về lỗi
          const errorData = await response.json();
          return thunkAPI.rejectWithValue(errorData);
        }
      } catch (error) {
        // Xử lý lỗi nếu có bất kỳ lỗi nào xảy ra
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );
  export const updateStatusApi = createAsyncThunk(
    'status/updateStatusApi',
    async (objUpdate, thunkAPI) => {
      // console.log('objupdate: '+ JSON.stringify(objUpdate));
       try {
        // Gửi yêu cầu DELETE đến API để xóa todo
  
        const response = await fetch(`${api_url}/${objUpdate.id}`, {
          method: 'PUT',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(objUpdate.data)
        });
        
        const data = await response.json();
        // console.log(response);
        // Kiểm tra nếu status code là 200 hoặc 204 thì xóa thành công
        if (response.ok) {
            // console.log(response);
          // Sau khi xóa thành công, trả về id của todo đã xóa để cập nhật store
           return data; 
        } else {
          // Nếu có lỗi từ phía server, trả về lỗi
          const errorData = await response.json();
          return thunkAPI.rejectWithValue(errorData);
        }
      } catch (error) {
        // Xử lý lỗi nếu có bất kỳ lỗi nào xảy ra
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );