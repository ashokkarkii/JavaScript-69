function fun(num) {
    if (num == 1 || num == 0)
        return 1;
    else
        return num*fun(num-1);

}
console.log(fun(10));
console.log(fun(0));