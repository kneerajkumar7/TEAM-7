class UniqueValues {
    findUniq(arr) {
        return [...new Set(arr)];
    }
}
const obj = new UniqueValues();
const numbers = [10, 20, 10, 30, 20, 40, 30, 50,60,90,90];
console.log("Original Array:", numbers);
console.log("Unique Values:", obj.findUniq(numbers));
