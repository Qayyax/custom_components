export default function Badge({ children, theme, border }) {
    const colors = {
        gray: {
            text: "#1F2937",
            color: "#F3F4F6"
        },
        red: {
            text: "#991B1B",
            color: "#FEE2E2"
        },
        yellow: {
            text: "#92400E",
            color: "#FEF3C7"
        },
        green: {
            text: "#065F46",
            color: "#D1FAE5"
        },
        blue: {
            text: "#1E40AF",
            color: "#DBEAFE"
        },
        indigo: {
            text: "#3730A3",
            color: "#E0E7FF"
        },
        purple: {
            text: "#5B21B6",
            color: "#EDE9FE"
        },
        pink: {
            text: "#9D174D",
            color: "#FCE7F3"
        }
    }

    return (
        <div
            className={`badge ${border}`}
            style={{ backgroundColor: colors[theme]?.color }}
        >
            <span className="badge-text" style={{ color: colors[theme]?.text }}>
                {children}
            </span>
        </div>
    )
}
