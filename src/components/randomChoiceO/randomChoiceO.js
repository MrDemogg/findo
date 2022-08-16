const randomChoiceO = (state) => {
    let field = state.field;
    let notfirstAtt = state.notfirstAtt;
    console.log(notfirstAtt);
    notfirstAtt = true;
    console.log(notfirstAtt);
    let random = Math.floor(Math.random() * field.length);
    for (let i = 0; i < field.length; i++) {
        if (field[i].keepO) {
            field[i].keepO = false;
        }
        if (field[i].class === 'openedBlock') {
            field[i].class = 'closedBlock';
        }
    }
    field[random].keepO = true;
    const returnObj = {
        field,
        notfirstAtt
    };
    return returnObj;
};

export default randomChoiceO;
