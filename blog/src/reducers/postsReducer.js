export const postsReducer = (state = 'teste', action) => {
  console.log(' reducer ')
  if (action.type === "TESTE")
    console.log("yes")
}
