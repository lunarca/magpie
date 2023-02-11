
type Props = {
  title: string
}

const Panel = (props: Props) => {

  return (
    <div class="m-2 border-orange-500 border-solid border-2 min-w-80 min-h-50 shadow">
      <div class="bg-orange-500 text-slate-900 px-2 py-1 font-bold">{props.title}</div>
      <div class="p-2 text-gray-200 min-h-40 bg-stone-800">Here is some content</div>
    </div>
  )
}

export default Panel