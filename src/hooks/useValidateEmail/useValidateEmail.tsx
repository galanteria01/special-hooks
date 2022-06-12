import React from 'react'

export default function useValidateEmail(email: string) {
  if (typeof email !== 'string') {
    throw new Error('email must be a string');
  }

  const [isValid, setIsValid] = React.useState<boolean>(false);

  React.useEffect(() => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    setIsValid(re.test(String(email).toLowerCase()));
  }, [email]);

  return isValid;
}
