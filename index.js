

function* foo(index) {
    while (index < 8) {
        yield index;
        index++;
    }
}

const iterator = foo(0);

const end = ('Конец');


console.log(iterator.next().value);
// expected output: 0

console.log (iterator.next().value);

console.log (iterator.next().value);

console.log (iterator.next().value);

console.log (iterator.next().value);

console.log (iterator.next().value);

console.log (iterator.next().value);

console.log (end);