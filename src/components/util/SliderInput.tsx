import { Component } from 'solid-js';

type Props = {
  legend: string,
  min: number,
  max: number,
  value: number,
  changeValue: (value: number) => void
}

const SliderInput: Component<Props> = (props) => {
  return (
    <fieldset>
      <legend class="font-bold text-lg">{props.legend}</legend>
      <div class="flex justify-between">
        <input type="range" min={props.min} max={props.max} 
          class="w-52 text-right px-1 outline-none range accent-cyan-700"
          value={props.value} 
          onInput={e => {props.changeValue(parseInt(e.currentTarget.value))}} />
        <div class="pr-2 pl-4 font-bold text-orange-300 text-right">{props.value}</div>
      </div>
    </fieldset>
  )
}

export default SliderInput