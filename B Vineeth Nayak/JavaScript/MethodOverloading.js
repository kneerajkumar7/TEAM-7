function add(...args) {
    if (args.length === 2) {
        return args[0] + args[1];
    }
        else if (args.length === 3) {
            return args[0] + args[1] + args[2];
        }
            else {
    return "Invalid number of arguments";
}
}
    console.log(add(10, 20));
    console.log(add(10, 20, 30));
    console.log(add(10));n

