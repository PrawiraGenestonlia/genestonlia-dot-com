import { EventContext } from '@cloudflare/workers-types'

import { Env } from '../types'
import { JsonResponse } from '../utils/json-response'

interface Data {}

export const onRequest = async (context: EventContext<Env, string, Data>) => {
  console.log(context)
  return new JsonResponse(
    {
      status: 'OK!',
      timestamp: new Date(),
    },
    {
      status: 200,
    },
  )
}
