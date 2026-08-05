interface ButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    className?: string;
}

export function Button({ children, onClick, className = "" }: ButtonProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            className={className}
        >
            {children}
        </button>
    );
}