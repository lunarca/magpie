import { Component } from 'solid-js';
import styles from './BoxRadioButton.module.css';

type Props = {
  fieldName: string,
  value: string,
  label: string,
  selected?: boolean
  handleChange: (value: string) => void
}

const BoxRadioButton: Component<Props> = (props) => {
  return (
    <div>
      <input 
        type="radio" name={props.fieldName} value={props.value} 
        id={props.value} checked={props.selected !== undefined ? props.selected : false} 
        class={`mr-2 ${styles.boxRadio}`}
        onInput={(event) => {props.handleChange(event.currentTarget.value)}}
      />

      <label for={props.value}>{props.label}</label>
    </div>
  )
}

export default BoxRadioButton