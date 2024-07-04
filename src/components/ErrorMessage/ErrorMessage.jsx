import css from './ErrorMessage.module.css';
import toast, {Toaster} from "react-hot-toast";

const ErrorMessage = ({message}) => {
    toast.error(message);

    return (
        <>
            <Toaster position="top-right"/>
        </>
    )
}

export default ErrorMessage;