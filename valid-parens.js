/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

const isValid = (s) => {
  if (s.length < 2) return false;

  const stack = [];
  const openToClose = {
    '{': '}',
    '(': ')',
    '[': ']'
  };

  const res = Array.from(s)
    .every((char, index) => {
      if (stack.length === 0){
        // nothing in stack, add this character
        stack.push(char)
        return true;
      } else {
        // we have something in the stack, this should be a new opening bracket or a closer of the last bracket in the stack
        if (Object.keys(openToClose).includes(char)){
          // we have a new opener bracket, that's fine. let's add it to the stack and continue
          stack.push(char);
          return true;
        } else if (Object.values(openToClose).includes(char) ){
          // if it's a closer and it matches the previous bracket in the stack, remove the opener and continue
          if (char === openToClose[stack[stack.length - 1]]){
            stack.pop()
            return true;
          } else {
            // otherwise, it's a mismatched bracket, break off here
            return false;
          }

        }
      }
  })

  // if .every returns true (no issues) and stack is empty (no mismatch/hanging brackets)
  return res && stack.length === 0;
}

console.log("Valid Parens")
console.log(isValid("()[]{}"))
console.log(isValid("({[]})"))
console.log(isValid("(]"))