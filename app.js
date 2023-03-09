const ChatContainer = () => {
    return (
        
        <div className="chat-container">
            <ChatHeader />
            <div>
                <button className="option">Matches</button>
                <button className="option">Chat</button>
                <button className="option">Hi</button>
                <button className="option">About</button>
            </div>
        <MatchesDisplay />
            <ChatDisplay />
        </div>
    )
}

export default ChatContainer
