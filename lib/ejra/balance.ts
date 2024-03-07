import { z } from 'https://deno.land/x/zod@v3.22.4/mod.ts'
import ejrc from './ejrc.ts'

type Opts = { address:string, tag?:Tag }

export default function ({ address, tag='latest' }:Opts) {
    const schema = z.string().transform(str => BigInt(str))
    const params = [address, tag] as const
    const method = 'eth_getBalance' as const
    const ejrrq = { method, params, schema }
    return { ejrrq, call: ({ url, rlbBypass }:{ url:string, rlbBypass?:boolean }) => ejrc({ url, ejrrq, rlbBypass }) }
}