interface ChatMessage {
    message: string
    from: string
    type: "playerMessage" | "gameMessage"
}