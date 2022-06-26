import React from 'react'
import copy from 'copy-to-clipboard'

export default function useCopyToClipBoard(reset = null) {
  const [copied, setCopied] = React.useState(false)

  function handleCopy(text: string) {
    if (typeof text === "string" || typeof text == "number") {
      copy(text.toString());
      setCopied(true);
    } else {
      setCopied(false);

    }
  }
  return [copied, handleCopy]
}
