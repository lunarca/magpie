import { children, Component } from 'solid-js';

type Props = {
  children: any,
  onClick?: () => void
  color?: "primary" | "secondary" | "RED"
}
const Button: Component<Props> = (props) => {
  const c = children(() => props.children)
  const colorClass = props.color === "secondary" ? "bg-cyan-600" : (props.color === "primary" ? "bg-orange-500" : "bg-RED")

  return (
    <button 
      class={`${colorClass} m-2 p-2  text-center ${props.color === "RED" ? "font-extrabold text-black shadow-lg" : "text-slate-900 font-bold shadow-sm"} `}
      onClick={props.onClick}
    >{c()}</button>
  )
}

export default Button