import ably from "ably"
import React from "react"

const key = "37EIzw.OhTL3Q:nL2B1l7Rkboe4NwW3B_n45OsuiwfLC2nNVKlXwUnIAk"

const Chat = () => {
  console.log("from chat page")

  React.useEffect(() => {
    // const ablyRealtime = new ably.Realtime(key)
    // const channel = ablyRealtime.channels.get("ably-chat")
  }, [])
  return <div>hi there</div>
}

export default Chat
