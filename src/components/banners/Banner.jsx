import { 
    FaCheckCircle,
    FaExclamationTriangle,
} from "react-icons/fa";
import { FaCircleInfo, FaCircleXmark } from "react-icons/fa6";

export default function Banner({ status="neutral", title, children }) {
    const statusIcon = {
        success: <FaCheckCircle />,
        warning: <FaExclamationTriangle />,
        error: <FaCircleXmark />,
        neutral: <FaCircleInfo />
    }

    return (
        <div className={`banner ${status}`}>
            {statusIcon[status]}
            <div className="banner-text">
                <p className="banner-title">{title}</p>
                <p className="banner-child">{children}</p>
            </div>
        </div>
    )
}
