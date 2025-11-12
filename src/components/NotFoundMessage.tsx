interface NotFoundMessageProps {
  message: string;
}

export function NotFoundMessage({ message }: NotFoundMessageProps) {
  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 text-yellow-700 dark:text-yellow-400">
      {message}
    </div>
  );
}