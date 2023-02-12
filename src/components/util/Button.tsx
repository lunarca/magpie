import { children, Component } from 'solid-js';

type Props = {
  children: any,
  onClick?: () => void
  color?: "primary" | "secondary"
}
const Button: Component<Props> = (props) => {
  const c = children(() => props.children)
  const colorClass = props.color === "secondary" ? "bg-cyan-600" : "bg-orange-500"

  return (
    <button 
      class={`${colorClass} m-2 p-2 text-slate-900 text-center font-bold shadow-sm`}
      onClick={props.onClick}
    >{c()}</button>
  )
}

export default Button