const Button = ({onClick, children}) => {
  return(
    <button className="hover:brightness-110 hover:animate-pulse font-bold py-3 px-6 mb-4 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50 text-white" onClick={onClick}>
      {children}
    </button>
  )
}

export default Button