function* createGenerator(start = 1, finish = Infinity) {
    for(i=start; i<finish; i++) {
        yield i
    }
}

for(let i of createGenerator(1,10)) {
    console.log(i)
}