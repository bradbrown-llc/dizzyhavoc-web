// import { JSX } from "preact";
// import { IS_BROWSER } from "$fresh/runtime.ts";
// import { useSignal } from '@preact/signals'
// import { amount } from '../lib/utils/mod.ts'

// export default function Web3Input(
//   props:{ decimals:bigint, maxVal:bigint|null|undefined }&JSX.HTMLAttributes<HTMLInputElement>,
// ) {
//     const decimals = 18
//     const value = useSignal(0n)
//     const numValue = useSignal('0')
//     const rangeValue = useSignal(0n)
//     function onTextInput(e:JSX.TargetedEvent<HTMLInputElement>) {
//         const { maxVal } = props
//         if (maxVal === undefined || maxVal === null) return
//         numValue.value = e.currentTarget.value
//         let tmp = `${numValue}`
//         if (tmp.match(/[^\d\.]|\..*\.|^\.?$/))
//             return value.value = rangeValue.value = 0n
//         const index = tmp.match(/\./)?.index ?? tmp.length - 1
//         const fracs = tmp.length - 1 - index
//         const zeros = Array(Math.max(decimals - fracs, 0)).fill('0').join('')
//         if (fracs > decimals) tmp = tmp.slice(0, decimals - fracs)
//         tmp = tmp.replace(/\./, '')
//         amount.value = value.value = BigInt(`${tmp}${zeros}`)
//         rangeValue.value = value.value * 100n / maxVal
//     }
//     function onRangeInput(e:JSX.TargetedEvent<HTMLInputElement>) {
//         const { maxVal } = props
//         if (maxVal === undefined || maxVal === null) return
//         rangeValue.value = BigInt(e.currentTarget.value)
//         amount.value = value.value = BigInt(rangeValue.value) * maxVal / 100n
//         let tmp = `${value}`.padStart(decimals, '0')
//         if (tmp.length == decimals) tmp = `0.${tmp}`
//         else tmp = `${tmp.slice(0, tmp.length - decimals)}.${
//             tmp.slice(tmp.length - decimals)}`
//         tmp = tmp.replace(/\.?0*$/, '')
//         numValue.value = tmp
//     }
//   return (
//     <div class="flex flex-col">
//       <input type="text"
//           {...props}
//           disabled={!IS_BROWSER||props.disabled}
//           class="h-[9mm] text-xl bg-transparent border-solid border-b-2 border-[#416390] rounded-sm caret-[#416390] text-[#416390] font-[monospace]"
//           value={numValue}
//           onInput={onTextInput}
//       />
//       <input type="range"
//           {...props}
//           disabled={!IS_BROWSER||props.disabled}
//           class="h-[9mm] text-xl accent-[#416390]"
//           value={rangeValue.value.toString()}
//           onInput={onRangeInput}
//       />
//     </div>
//   )
// }

export default function () { return <></> }