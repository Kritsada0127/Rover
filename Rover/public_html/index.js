const di = ["N", "E", "S", "W"];
let x = 0; let y = 0; let k = 0;
let size = document.getElementById('size');

function getVal()
{
    size = size.value -1;
    document.getElementById('res').value = di[k] + "(" + x +","+ y +")";
    console.log(size);
}

function test()
{
    let i1 = i+1;
    document.getElementById('res').value = i1 + i;
}

function controlF()
{
    console.log(x);console.log(y);console.log(size);
    if(k === 0) {
        y++;
        if(y <= size && y >= 0){
            document.getElementById('res').value = di[k] + "(" + x +","+ y +")";
        }else {
            document.getElementById('res').value = "You are out of the way!";
        }
    }
    else if(k === 1) {
        x++;
        if(x <= size && x >= 0){
            document.getElementById('res').value = di[k] + "(" + x +","+ y +")";
        }else {
            document.getElementById('res').value = "You are out of the way!";
        }
    }
    else if(k === 2) {
        y--;
        if(y <= size && y >= 0){
            document.getElementById('res').value = di[k] + "(" + x +","+ y +")";
        }else {
            document.getElementById('res').value = "You are out of the way!";
        }
    }
    else if(k === 3) {
        x--;
        if(x <= size && x >= 0){
            document.getElementById('res').value = di[k] + "(" + x +","+ y +")";
        }else {
            document.getElementById('res').value = "You are out of the way!";
        }
    }
}

function controlL()
{
    k--;
    if(k < 0) {
        k = 3;
    }
    document.getElementById('res').value = di[k] + "(" + x +","+ y +")";
}

function controlR()
{
    k++;
    if(k > 3) {
        k = 0;
    }
    document.getElementById('res').value = di[k] + "(" + x +","+ y +")";
}