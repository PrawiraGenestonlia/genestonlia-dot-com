import { EventContext } from '@cloudflare/workers-types'
import { Env } from '../types'

interface Data {}

export const onRequest = async (context: EventContext<Env, string, Data>) => {
  console.log(context)
  return new Response(JSON.stringify({ status: 'OK!' }))
}
