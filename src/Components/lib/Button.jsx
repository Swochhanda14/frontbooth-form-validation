export default function Button({
  title,
  loading,
  onClick,
  type = 'button',
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = ''
}) {
  const base = 'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2',
    lg: 'px-5 py-3 text-lg'
  };
  const variants = {
    primary: 'bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-500 disabled:bg-amber-300',
    secondary: 'bg-white text-amber-700 border border-amber-300 hover:bg-amber-50 focus:ring-amber-300 disabled:bg-gray-100',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-300',
    ghost: 'bg-transparent text-amber-700 hover:bg-amber-50 focus:ring-amber-300 disabled:text-gray-400'
  };
  const width = fullWidth ? 'w-full' : '';
  const cls = [base, sizes[size], variants[variant], width, className].join(' ').trim();
  return (
    <button disabled={loading} type={type} onClick={onClick} className={cls}>
      {loading ? 'Loading..' : (children ?? title)}
    </button>
  );
}
