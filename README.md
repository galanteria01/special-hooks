# Special Hooks

This project was made to provide some easy and special hooks for hassle-free development.

## Available Hooks

**useCardType** - This hook is used to get the card type of a card.

```
const [cardType, errors] = useCardType(cardNumber);
```

**useValidateEmail** - This hook is used to get the card type of a card.

```
const isValid = useValidateEmail(email);
```

**useRandomEmails** - This hook generates random emails.

```
const emails = useRandomEmails(count);
```

**useRandomColors** - This hook is made to generate random colors.

```
const colors = useRandomColors(count);
```

**useCounter** - This provides a counter object to be used in a component.

```
const {count, increment, decrement} = useCount(initialCount);
```

**useDateTime** - It provides current date and time in a array.

```
const [date, time] = useDateTime();
```

**useCopyToClipboard** - It returns the copied boolean state and handleCopy method to save text to clipboard

```
const [copied, handleCopy] = useCopyToClipboard();
```

**useHorizontalOverflow** - It returns the boolean for the overflow condition in a container taking ref as input.

```
const [copied, handleCopy] = useHorizontalOverfow(ref, callback?);
```

**useVerticalOverflow** - It returns the boolean for the overflow condition in a container taking ref as input.

```
const [copied, handleCopy] = useVerticalOverflow(ref, callback?);
```

## Contribution Guide

Feel free to contribute to the codebase.