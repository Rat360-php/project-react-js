import clsx from 'clsx';

export default function Button(props) {
  const { className, text, children, onClick } = props;
  return (
    <button
      {...props}
      className={clsx(
        className,
        '[&>svg]:w-5 [&>svg]:h-5 p[&>svg]:stroke-1 flex items-center gap-x-2 py-4 px-2 rounded text-white'
      )}
    >
      {text || children}
    </button>
  );
}
