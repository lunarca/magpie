import { Component } from 'solid-js';
import styles from "./Tuner.module.css"

type Props = {
  frequency: number,
}

const Tuner: Component<Props> = (props) => {
  return (
    <div class="flex flex-row">
      <div 
      class={`border-gray-400 text-gray-300 border-[3px] text-4xl ` +
      `bg-zinc-800 h-16 mx-2 ${styles.tunerFace} flex items-center justify-end ` +
      `px-3 flex-grow`}>
        {props.frequency.toFixed(2)}
      </div>
      <div class="text-4xl flex items-center justify-end">
        MHz
      </div>
    </div>

  )
}

export default Tuner