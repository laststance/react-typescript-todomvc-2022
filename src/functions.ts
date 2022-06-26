export const UUID = (): string => {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz012345678'
  const charactersLength = characters.length
  for (let i = 0; i < 12; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
