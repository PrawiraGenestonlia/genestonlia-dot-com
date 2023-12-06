export const onRequest = async (context) => {
  console.log(context)
  console.log('hello from worker')
  return new Response('hello from worker')
}
