import { Toad } from 'https://cdn.jsdelivr.net/gh/bradbrown-llc/toad@0.0.3/mod.ts'
import { Ejra } from 'https://cdn.jsdelivr.net/gh/bradbrown-llc/ejra@0.0.1-toad/lib/Ejra.ts'

const toad = new Toad(250)

const ejra = new Ejra(toad)

;(async () => { for await (const m of ejra.out) console.log(m) })()
;(async () => { for await (const e of ejra.err) console.error(e) } )()

export { ejra }