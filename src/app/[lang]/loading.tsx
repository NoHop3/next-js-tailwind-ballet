export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-fuchsia-900 to-purple-900 flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Animated logo */}
        <div className="relative">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-500 flex items-center justify-center shadow-2xl shadow-pink-500/30 animate-pulse">
            <span className="text-4xl">🩰</span>
          </div>
          <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <div className="h-6 w-32 bg-white/10 rounded-lg animate-pulse"></div>
          <div className="h-4 w-48 bg-white/5 rounded-lg animate-pulse"></div>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2">
          <div
            className="w-3 h-3 rounded-full bg-pink-400 animate-bounce"
            style={{ animationDelay: '0ms' }}
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-fuchsia-400 animate-bounce"
            style={{ animationDelay: '150ms' }}
          ></div>
          <div
            className="w-3 h-3 rounded-full bg-purple-400 animate-bounce"
            style={{ animationDelay: '300ms' }}
          ></div>
        </div>
      </div>
    </div>
  );
}
