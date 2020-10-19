function display(x){
    form.show.value += x;
}
function back(){
    var find = form.show.value;
    form.show.value = find.substring(0,find.length-1);
}