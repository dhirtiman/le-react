import { useRecoilValue } from 'recoil'
import './App.css'
import {
    jobsAtom,
    messagingAtom,
    networkAtom,
    notificationsAtom,
    totalNotificationSelector,
} from './store/atoms/linkdn'
import { useSetRecoilState } from 'recoil'

function App() {
    const networkCount = useRecoilValue(networkAtom)

    const jobsCount = useRecoilValue(jobsAtom)
    const notificationsCount = useRecoilValue(notificationsAtom)
    const messagingCount = useRecoilValue(messagingAtom)
    const totalNotificationCount = useRecoilValue(totalNotificationSelector)

    return (
        <>
            <button className="nav-button" style={navButtonStyle}>
                Home
            </button>

            <button className="nav-button" style={navButtonStyle}>
                My network ({networkCount > 100 ? '99+' : networkCount})
            </button>
            <button className="nav-button" style={navButtonStyle}>
                Jobs ({jobsCount})
            </button>
            <button className="nav-button" style={navButtonStyle}>
                Notifications ({notificationsCount})
            </button>

            <button className="nav-button" style={navButtonStyle}>
                Messaging ({messagingCount})
            </button>
            <ButtonUpdater />
            <button className="nav-button" style={navButtonStyle}>
                Me ({totalNotificationCount})
            </button>
        </>
    )
}

function ButtonUpdater() {
    const setMessagingCount = useSetRecoilState(messagingAtom)

    return (
        <button
            onClick={() => {
                setMessagingCount((c) => c + 1)
            }}
        >
            +
        </button>
    )
}

// css styles

const navButtonStyle = {
    backgroundColor: '#f0f0f0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    margin: '5px',
    cursor: 'pointer',
}

export default App
