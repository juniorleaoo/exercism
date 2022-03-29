function isEmpty(message: string) {
  return message.length === 0;
}

function isQuestion(message: string) {
  return message[message.length - 1] === '?';
}

function isAllInUpperCase(message: string) {
  return message === message.toUpperCase();
}

function isContainLetter(message: string) {
  return /[a-zA-Z]/g.test(message);
}

export function hey(message: string): string {
  const messageTrimmed = message.trim();

  if (isEmpty(messageTrimmed)) {
    return 'Fine. Be that way!';
  } else if (isQuestion(messageTrimmed)) {
    
    if (!isContainLetter(messageTrimmed)) {
      return 'Sure.';
    } else if (isAllInUpperCase(messageTrimmed)) {
      return 'Calm down, I know what I\'m doing!';
    }
    return 'Sure.'
  
  } else if (isAllInUpperCase(messageTrimmed) && isContainLetter(messageTrimmed)) {
    return 'Whoa, chill out!';
  }

  return 'Whatever.';
}
