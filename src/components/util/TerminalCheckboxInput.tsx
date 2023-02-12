import { Component } from 'solid-js';
import styles from './TerminalCheckboxInput.module.css'

type Props = {
  label: string,
  checked?: boolean
  handleChange: (value: boolean) => void
}

const TerminalCheckboxInput: Component<Props> = (props) => {

  const toggleCheckbox = () => {
    props.handleChange(!props.checked)
  }

  return (
    <div onClick={toggleCheckbox}>
      <input type="checkbox" name="checkbox" 
        class={`mr-2 ${styles.terminalCheckbox}`} 
        checked={props.checked !== undefined ? props.checked : false}
      />
      <label for="checkbox">{props.label}</label>
    </div>
  )
}

export default TerminalCheckboxInput