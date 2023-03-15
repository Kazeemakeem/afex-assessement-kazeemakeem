import Cipher from "@ibnlanre/cipher";



const encryption_key = process.env.REACT_APP_KEY as string
  const initialization_vector = process.env.REACT_APP_VECTOR as string

  const cipher = new Cipher({
    initialization_vector,
    algorithm: "aes-256-cbc",
    output_decoding: "base64",
    input_encoding: "utf-8",
    encryption_key
  });

  
  export const { decrypt } = cipher;