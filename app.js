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

return (
        <>
            <Chat />
            <ChatInput />
        </>
    )

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.json('App running')
})

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

  const authToken = cookies.AuthToken

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {authToken && <Route path="/dashboard" element={<Dashboard />} />}
        {authToken && <Route path="/onboarding" element={<OnBoarding />} />}
      </Routes>
    </BrowserRouter>
  )
}

export default ChatContainer
