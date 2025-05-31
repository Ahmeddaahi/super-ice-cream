import MenuCardSkeleton from '@/components/menu-card-skeleton';

export default function Loading() {
  return (
    <main className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="h-12 bg-gray-200 rounded w-48 mx-auto mb-4 animate-pulse" />
          <div className="h-6 bg-gray-200 rounded w-96 mx-auto animate-pulse" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <MenuCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
