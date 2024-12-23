import PropertyGrid from '@/components/properties/PropertyGrid';

export default function PropertiesPage() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-black text-white py-12">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-4">Featured Properties</h1>
                    <p className="text-lg">Discover our handpicked selection of premium properties</p>
                </div>
            </div>
            <PropertyGrid />
        </div>
    );
}
