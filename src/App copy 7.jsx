/* eslint-disable react/prop-types */
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
            <ButtonThing>Home</ButtonThing>

            <ButtonThing>
                My network ({networkCount > 100 ? '99+' : networkCount})
            </ButtonThing>
            <ButtonThing>Jobs ({jobsCount})</ButtonThing>
            <ButtonThing>Notifications ({notificationsCount})</ButtonThing>

            <ButtonThing>Messaging ({messagingCount})</ButtonThing>
            <ButtonUpdater />
            <ButtonThing>Me ({totalNotificationCount})</ButtonThing>
        </>
    )
}

function ButtonThing({ children }) {
    return (
        <button className=" bg-slate-100 m-1 p-2 cursor-pointer border-2 border-solid rounded-md box-border ">
            {children}
        </button>
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

export default App
