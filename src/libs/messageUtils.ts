import { Buffer } from "buffer";

// Primary entry point for encoding a message to a list of numbers
export const messageToNumbers = async (message: string, encoding: string, password?: string) => {
  if (password) {
    const {ivEncoded, ciphertextEncoded} = await encodeMessageWithPassword(message, password, encoding)
    switch (encoding) {
      case "base64":
        return [...base64StringToNumbers(ivEncoded), ":", ...base64StringToNumbers(ciphertextEncoded)]
      case "base16":
        return [...hexToNumbers(ivEncoded), ":", ...hexToNumbers(ciphertextEncoded)]
      default:
        return [...hexToNumbers(ivEncoded), ":", ...hexToNumbers(ciphertextEncoded)]
    }
  } else {
    const encodedMessage = encodeMessage(message, encoding)

    switch (encoding) {
      case "base64":
        return base64StringToNumbers(encodedMessage)
      case "base16":
        return hexToNumbers(encodedMessage)
      default:
        return hexToNumbers(encodedMessage)
    }
  }
}

export const numbersToMessage = async (numbers: string[], encoding: string, password?: string) => {
  if (password) {
    // TODO

  } else {
    switch (encoding) {
      case "base64":
        return Buffer.from(numbersToB64String(numbers), "base64").toString("utf-8")
      case "base16":
        return Buffer.from(numbersToHexString(numbers), "hex").toString("utf-8")
      default:
        return Buffer.from(numbersToHexString(numbers), "hex").toString("utf-8")
    }
  }
}

const encodeMessage = (message: string | Buffer, encoding: string) => {
  switch (encoding) {
    case "base64":
      return Buffer.from(message).toString("base64");
    case "base16":
      return Buffer.from(message).toString("hex");
    default:
      // Default to hex encoding if something bugs out in the UI
      return Buffer.from(message).toString("hex");
  }
}

const encodeMessageWithPassword = async (message: string, password: string, encoding: string) => {
  const {iv, ciphertext} = await encryptMessage(message, password)
  const ivEncoded = encodeMessage(iv, encoding)
  const ciphertextEncoded = encodeMessage(ciphertext, encoding)

  return {ivEncoded, ciphertextEncoded}
}

const encryptMessage = async (plaintext: string, password: string) => {
  const key = await deriveKeyFromPassword(password)
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const encrypted = await crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv,
    },
    key,
    Buffer.from(plaintext)
  )

  return {iv: Buffer.from(iv), ciphertext: Buffer.from(encrypted)}
}

const decryptMessage = async (iv: Buffer, ciphertext: Buffer, password: string) => {
  const key = await deriveKeyFromPassword(password)
  const decrypted = await crypto.subtle.decrypt(
    {
      name: "AES-GCM",
      iv,
    },
    key,
    Buffer.from(ciphertext)
  )
  return Buffer.from(decrypted).toString("utf-8")
}

const deriveKeyFromPassword = async (password: string) => {

  // "Import" the password as a key for pbkdf2
  const rawKey = await crypto.subtle.importKey(
    "raw",
    Buffer.from(password),
    "PBKDF2",
    false,
    ["deriveKey"]
  )

  // Derive a key from the password. We're not salting the password here, don't
  // use this code as a real key derivation example. THIS IS A TOY.
  const derivedKey = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: Buffer.from("unsalted key"),
      iterations: 100000,
      hash: "SHA-256",
    },
    rawKey,
    {name: "AES-GCM", length: 256},
    true,
    ["encrypt", "decrypt"])

  return derivedKey
}

const b64Charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/"

const base64StringToNumbers = (base64: string) => {

  const b64Stripped = base64.replace(/=+$/, "")
  const numberList = b64Stripped.split("").map((char) => {
    const index = b64Charset.indexOf(char)
    if (index === -1) {
      throw new Error("Invalid base64 character")
    }
    return index.toString()
  })

  return numberList
}

const numbersToB64String = (numbers: string[]) => {
  const b64String = numbers.map((number) => {
    const index = parseInt(number, 10)
    if (index < 0 || index > 63) {
      throw new Error("Invalid base64 number")
    }
    return b64Charset[index]
  }).join("")

  return b64String
}

const hexCharset = "0123456789abcdef"

const hexToNumbers = (hex: string) => {

  console.log(hex)

  const hexStripped = hex.replace(/=+$/, "")
  const numberList = hexStripped.split("").map((char) => {
    const index = hexCharset.indexOf(char.toLowerCase())
    if (index === -1) {
      throw new Error("Invalid hex character")
    }
    return index.toString()
  })

  return numberList
}

const numbersToHexString = (numbers: string[]) => {
  const hexString = numbers.map((number) => {
    const index = parseInt(number, 10)
    if (index < 0 || index > 15) {
      throw new Error("Invalid hex number")
    }
    return hexCharset[index]
  }).join("")

  return hexString
}