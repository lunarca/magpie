import { children, Component } from 'solid-js';

type Props = {
  children: any,
  onClick?: () => void,
  color?: "primary" | "secondary" | "RED",
  flexGrow?: boolean,
}

const getColorClass = (color: Props["color"]) => {
  switch (color) {
    case "primary":
      return "bg-orange-500"
    case "secondary":
      return "bg-cyan-600"
    case "RED":
      return "bg-RED"
    default:
      return "bg-orange-500"
  }
}

const Button: Component<Props> = (props) => {
  const c = children(() => props.children)

  return (
    <button 
      class={`${getColorClass(props.color)} box-content m-2 p-2 ${props.flexGrow && "flex-grow"} text-center ${props.color === "RED" ? "font-extrabold text-black shadow-lg" : "text-slate-900 font-bold shadow-sm"} `}
      onClick={props.onClick}
    >{c()}</button>
  )
}

export default Button