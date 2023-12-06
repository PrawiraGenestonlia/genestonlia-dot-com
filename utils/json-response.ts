export class JsonResponse extends Response {
  constructor(
    body?: object | null | undefined,
    init?: ResponseInit | undefined
  ) {
    super(typeof body === 'object' ? JSON.stringify(body) : body, {
      ...init,
      headers: {
        ...init?.headers,
        'content-type': 'application/json;charset=UTF-8',
      },
    })
  }
}
