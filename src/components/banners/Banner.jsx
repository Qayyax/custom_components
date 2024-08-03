import {
    FaCheckCircle,
    FaExclamationTriangle,
} from "react-icons/fa";
import { FaCircleInfo, FaCircleXmark } from "react-icons/fa6";

export default function Banner({ status = "neutral", title, children }) {
    const statusIcon = {
        success: <FaCheckCircle />,
        warning: <FaExclamationTriangle />,
        error: <FaCircleXmark />,
        neutral: <FaCircleInfo />
    }

    if (!(status in statusIcon)) {
        console.log("Not a recognized status, default to neutral")
        status = "neutral"
    }

    return (
        <div className={`banner ${status}`}>
            {statusIcon[status]}
            <div className="banner-text">
                <p className="banner-title">{title}</p>
                {children ? children : null}
            </div>
        </div>
    )
}
