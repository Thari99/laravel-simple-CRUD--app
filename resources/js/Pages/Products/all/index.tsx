import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import { table } from 'console';

export default function Products({ product }: { product: Array<{ id: number, name: string, description: string }> }) {
    return (
        <AuthenticatedLayout
            header={
                <div className='flex justify-between'>
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Products

                    </h2>
                    <Link
                        href={route('products.create')}
                        className='bg-yellow-500 duration-300 ease-in-out text-white px-6 py-2 rounded-lg hover:bg-yellow-700'>
                        Create Product
                    </Link>
                </div>
            }
        >
            <Head title="Dashboard" />


            <div className="py-12">
                <div className="mx-auto max-w-xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 text-gray-900">
                        <h1 className="text-xl font-bold mb-4">Products</h1>

                        {product && product.length > 0 ? (

            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                    </th>
                </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                {product.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {product.name}
                    </td>

                    {/* description: use truncate (single line) or line-clamp-2 (multi-line clamp plugin) */}
                    <td className="px-6 py-4 whitespace-normal text-sm text-gray-600 max-w-[40rem]">
                        <div className="overflow-hidden text-ellipsis">
                        {/* If you have the line-clamp plugin you can use "line-clamp-2" instead */}
                        <span className="block truncate">{product.description || '-'}</span>
                        </div>
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-right">
                        <div className="inline-flex items-center gap-3">
                        <Link
                            href={route('categories.destroy', product.id)}
                            method="delete"
                            as="button"
                            onClick={(e) => {
                                if (!confirm('Delete this category?')) {
                                e.preventDefault(); // cancel
                                }
                            }}
                            className="px-3 py-1 rounded-md text-sm font-medium text-red-600 hover:bg-blue-50 hover:text-blue-800"
                            >
                            Delete
                        </Link>

                        <Link
                            href={route('categories.edit', product.id)}
                            //href={`/categories/${cat.id}/edit`}
                            className="px-3 py-1 rounded-md text-sm font-medium text-indigo-600 hover:bg-indigo-50 hover:text-indigo-800"
                        >
                            Edit
                        </Link>
                        </div>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>

                        ) : (
                        <div>No categories yet.</div>
                        )}
                    </div>
                    </div>
                </div>
        </div>
        </AuthenticatedLayout>
    );
}
