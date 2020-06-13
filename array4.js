const lesson1 = ['Math', 'English', 'Programming']
const lesson2 = ['Geography', 'Spanish', 'Programming']

const compared = (arr1, arr2) => {
    let result = true;
    let results = arr1.map((item) => {
        if (arr2.includes(item)) {
            result = true;
        } else {
            result = false;
        }
    });
    return result;
};
console.log(compared(lesson1, lesson2));