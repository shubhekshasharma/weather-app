/**
 * Displays a loading indicator
 */

export function LoadingState() {
  return (
    <div className="flex justify-center">
      <div className="text-zinc-600 dark:text-zinc-400">
        <div className="flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent border-solid rounded-full animate-spin"></div>
    </div>
      </div>
    </div>
  );
}
