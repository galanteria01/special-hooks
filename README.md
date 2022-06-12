# Special Hooks

This project was made to provide some easy and special hooks for hassle-free development.

## Available Hooks

**useCardType** - This hook is used to get the card type of a card.

```
const [cardType, setCardType] = useCardType(cardNumber);
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
