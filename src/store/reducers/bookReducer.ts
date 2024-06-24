import { Book } from "../../interface/interface";
// khởi tạo state
// const initialBook:Book[]=JSON.parse(localStorage.getItem("book")||"[]");
const initialBook:Book[] = [
    {
        id: 1,
        name: "dạy con làm giàu",
        borrow: "24/06/2024",
        pay: "25/06/2024",
        student: "huyền",
        status: false,
    },
    {
        id: 2,
        name: "nhà giả kim",
        borrow: "24/06/2024",
        pay: "27/06/2024",
        student: "quỳnh",
        status: false,
    },
    {
        id: 3,
        name: "cha giàu cha nghèo",
        borrow: "20/06/2024",
        pay: "29/06/2024",
        student: "lan anh",
        status: false,
    }
]

// tạo hàm bookreducer
// chức năng của hàm reducer là tính toán trả về state mới dựa vào action
// action (những công việc mà mình muốn thêm, sửa, xóa...)
// hàm reducer tính toán trả về state mới
// tại sao phải tạo state mới vì cái thằng useSelector nó sẽ giúp component
// re-render khi có state mới
// const ADD_BOOK = "ADD_BOOK"
export const bookReducer = (state = initialBook, action:any) => {
    switch (action.type) {
        case "ADD_BOOK":
            return [...state];
        case "DELETE_BOOK":
            return [...state];
        case "UPDATE_STATUS":
            console.log("đang tiến hành update trạng thái!");
            // lấy ra id
            // tìm vị trí theo id
            let confirmUpdateState = window.confirm(
                "bạn có muốn update trạng thái hay không?"
            );
            if(!confirmUpdateState){
                return;
            }
            let index = state.findIndex(item=>item.id==action.payload);
            console.log("vị trí của phần tử cần update trạng thái", index);
            
            // đi update lại status
            return [...state];
        case "UPDATE_BOOK":
            return [...state];            
        default:
            return state;
    }
}