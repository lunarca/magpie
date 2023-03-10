import { children, Component } from 'solid-js'

type Props = {
  title: string,
  children: any
}

const Panel: Component<Props> = (props: Props) => {

  const c = children(() => props.children)

  return (
    <div class="flex flex-col border-orange-500 border-solid border-2 shadow w-full h-full bg-stone-800 box-border">
      <div class=" bg-orange-500 text-slate-900 px-2 py-1 font-bold">{props.title}</div>
      <div class="flex-grow p-2 text-gray-200 w-full">{c()}</div>
    </div>
  )
}

export default Panel