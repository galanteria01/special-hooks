import React from "react";

const cardRegex = {
  "Visa": /^4[0-9]{12}(?:[0-9]{3})?$/,
  "Master Card": /^5[1-5][0-9]{14}$/,
  "American Express": /^3[47][0-9]{13}$/,
  "Diners": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  "Discover": /^6(?:011|5[0-9]{2})[0-9]{12}$/,
  "JCB": /^(?:2131|1800|35\d{3})\d{11}$/,
  "Union Pay": /^(62|88)\d{14}$/,
  "Maestro": /^(5018|5020|5038|6304|6759|676[1-3])\d{10,17}$/,
  "ELO": /^((((636368)|(438935)|(504175)|(451416)|(45763[1-4])|(4011[0-9][0-9])|(3528[0-9][0-9])|(6304[0-9][0-9])|(6759[0-9][0-9])|(6761[0-9][0-9])|(6334[0-9][0-9])|(6334[0-9][0-9])|(6759[0-9][0-9])))\d{0,10})$/,
  "Hiper Card": /^(606282|3841[0-9]{5})\d{0,10}$/,
  "Visa Electron": /^(4026|417500|4405|4508|4844|4913|4917)\d{12}$/,
  "Dinners Club": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
  "Discovers Platinum": /^6(?:011|5[0-9]{2})[0-9]{12}$/
}

export default function useCardType(cardNumber: string) {
  if (typeof cardNumber !== 'string') {
    throw new Error('cardNumber must be a string');
  }
  const [cardType, setCardType] = React.useState<string>('Unknown');
  const [errors, setErrors] = React.useState<string[]>([]);

  React.useEffect(() => {
    for (const [key, value] of Object.entries(cardRegex)) {
      if (value.test(cardNumber)) {
        setCardType(key);
        break;
      }
    }
  }, [cardNumber]);

  if (cardType === 'Unknown') {
    setErrors(['Invalid card number']);
  }

  return [cardType, errors];
}
