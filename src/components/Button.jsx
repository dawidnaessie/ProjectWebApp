export default function Button({ children, onClick, className }) {
    return(
        <div>
            <button 
            className={`px-4 py-2 rounded-md text-white bg-emerald-900 hover:bg-emerald-800 transition ${className}`}
            onClick={onClick}>
                {children}
            </button>
        </div>
    );
}