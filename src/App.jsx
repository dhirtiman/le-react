import { useRecoilValue } from 'recoil';
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom } from './store/atoms/linkdn';

function App() {

    const networkCount = useRecoilValue(networkAtom)


    const jobsCount = useRecoilValue(jobsAtom);
    const notificationsCount = useRecoilValue(notificationsAtom);
    const messagingCount = useRecoilValue(messagingAtom);


    return (
        <>
            <button>Home</button>


            <button>My network ({ networkCount > 100 ? "99+" : networkCount})</button>
            <button>Jobs ({ jobsCount })</button>
            <button>Messaging ({ messagingCount })</button>
            <button>Notifications ({ notificationsCount })</button> 
            <button>Me</button>
        </>
    )
}


export default App;