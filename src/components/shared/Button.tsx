

interface ButtonProps {
    className?: string;
    children?: React.ReactNode;
    onClick?: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border border-transparent bg-violet-600 cursor-pointer ${className}`}>
            <span className='relative z-10 text-white'>{children}</span>
        </button>
    )
}

export default Button