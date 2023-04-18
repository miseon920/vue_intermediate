const getTotalNum = (state) => {
    return state.todoItems.length;
};

const getTrueNum = (state) => {
    //인자는 state
    const trueItem = state.todoItems.filter((item) => item.completed === true);
    return trueItem.length;
};

export { getTotalNum, getTrueNum };
