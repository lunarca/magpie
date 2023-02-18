import { Component } from 'solid-js';

import logo from "../assets/icons/magpie-icon.png"

type Props = {

}

const Logo: Component<Props> = (props) => {
  return (
    <div class="flex flex-row h-16 w-full items-center justify-start mx-5 my-3 flex-2 gap-2">
      <span class="flex flex-row font-extrabold h-fit text-4xl">
        <div class="text-orange-500">MAG</div>
        <div class="text-cyan-400">PIE</div>
      </span>
      <img class="h-fit" src={logo}></img>
    </div>
  )
}

export default Logo