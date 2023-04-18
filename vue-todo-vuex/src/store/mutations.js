import sortlist from './store';

const addOneItem = (state, value) => {
    //console.log(value)
    const obj = { completed: false, value: value }; //const를 쓰면 재선언할 수 없어 디버깅할 때 충돌을 줄일 수 있음
    //오브젝트로 만들어줬기 때문에 obj를 찍게 되면 object object가 찍힘, 따라서 문자열로 변환해 주는것
    localStorage.setItem(value.item, JSON.stringify(obj)); //JavaScript 값이나 객체를 JSON 문자열로 변환
    if (!state.todoItems.some((element) => element.value.item == value.item)) {
        state.todoItems.unshift(obj);
    } else {
        alert("이미 작성된 내용입니다.");
    }
};
const removeOneItem = (state, payload) => {
    //console.log(payload);
    localStorage.removeItem(payload.todoItem.value.item); //객체일때 로컬스트리지에서 삭제하기
    state.todoItems.splice(payload.index, 1); //현재 리스트에서 삭제하기
};
const toggleOneItem = (state, payload) => {
    //todoItem.completed = !todoItem.completed; //이벤트로 넘어온값을 바꾸는 것을 안티패턴이라고 하며 어짜피 props로 내려준 값이 변경되므로 아래와같이 변경한것
    state.todoItems[payload.index].completed =
        !state.todoItems[payload.index].completed;
    //localStorage 갱신하기
    localStorage.removeItem(payload.todoItem.value.item); //localStorage는 업데이트 기능이 없으므로 삭제 후
    localStorage.setItem(
        payload.todoItem.value.item,
        JSON.stringify(payload.todoItem)
    ); //새로 추가해준다, 이때 completed 값이 바꼈으므로 바뀐값이 들어오게 된다.

    const finalData = JSON.parse(JSON.stringify(state.todoItems));
    return (state.todoItems = sortlist(finalData));
};
const clearAllItems = (state) => {
    localStorage.clear();
    state.todoItems = [];
};

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems };
