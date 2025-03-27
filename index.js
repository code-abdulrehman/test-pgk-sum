export const sum = (a, b) => {
  try {
    let result = `Sum of ${a} and ${b} is ${a + b} \n Thank you for using test-pgk-sum`;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default sum;
