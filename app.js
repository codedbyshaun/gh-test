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
         
         const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3 ">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
)

import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal = () =>  (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2>Find a better card deal 
          <br className="sm:block hidden" /> in a few easy steps.</h2>
          <p></p>
      </div>


    </section>
  )


export default CardDeal

export default ChatContainer
