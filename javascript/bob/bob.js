//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  const messageTrimmed = message.trim();

  const isEmpty = messageTrimmed.length === 0;
  const isQuestion = messageTrimmed[messageTrimmed.length - 1] === '?';
  const allInUpperCase = messageTrimmed === messageTrimmed.toUpperCase();
  const containLetter = /[a-zA-Z]/g.test(messageTrimmed);

  if (isEmpty) {
    return 'Fine. Be that way!';
    
  } else if (!containLetter && isQuestion) {
    return 'Sure.';

  } else if (isQuestion && allInUpperCase) {
    return 'Calm down, I know what I\'m doing!';

  } else if (isQuestion) {
    return 'Sure.'

  } else if (allInUpperCase && containLetter) {
    return 'Whoa, chill out!';

  }

  return 'Whatever.';
};
