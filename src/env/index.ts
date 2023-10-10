import 'dotenv/config'
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'prod']).default('dev'),
  PORT: z.coerce.number().default(3333), // Converte a porta para número, independente do formato.
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('❌ Invalid enviroment variable.')
  _env.error.format()
  // Formata todos o erros recebidos.
  throw new Error('Invalid enviroment variable.')
}

export const env = _env.data
