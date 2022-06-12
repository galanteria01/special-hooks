import React from "react";

export default function useRandomEmails(count: number) {
  if (typeof count !== 'number') {
    throw new Error('count must be a number');
  }
  
  const [emails, setEmails] = React.useState<string[]>([]);

  React.useEffect(() => {
    const randomEmails = [];
    for (let i = 0; i < count; i++) {
      randomEmails.push(generateEmail());
    }
    setEmails(randomEmails);
  }, [count]);

  return emails;
}

function generateEmail() {
  var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
  var domains = [
    'gail.com',
    'ohayo.com',
    'mailnot.com',
    'lao.com',
    'casto.net',
    'nms.com',
  ]
  var string = '';
  for (var i = 0; i < 15; i++) {
    string += chars[Math.floor(Math.random() * chars.length)];
  }
  return string + '@' + domains[Math.floor(Math.random() * domains.length)];
}