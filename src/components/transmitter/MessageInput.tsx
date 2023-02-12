import { Component } from 'solid-js';
import Panel from '../Panel';

type Props = {
  setMessage: (message: string) => void
}

const MessageInput: Component<Props> = (props) => {
  return (
    <div class="w-96 h-80 m-2">
      <Panel title="Message Input">
        <textarea 
          onChange={(event) => {props.setMessage(event.currentTarget.value)}} 
          class="bg-stone-800 h-full w-full resize-none outline-none overflow-auto" 
          placeholder="Enter message here..."
          />
      </Panel>
    </div>

  )
}

export default MessageInput