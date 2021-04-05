function* createGenerator() {
    for(i=1; i<Infinity; i++) {
        yield i
    }
}

for(let i of createGenerator(1,10)) {
    console.log(i)
}