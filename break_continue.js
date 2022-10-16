const nums = [1,2,3,4,5,6,-3,-4];

for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    if (element>4) {
        break;
    }
    if (element<0) {
        continue;
    }
    console.log(element);
}
 