import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Products() {

    const { data, setData, post, processing, errors, reset } = useForm({
            name:"",
            description:"",
            price:"",
            category_id:""

        });

    const submit: FormEventHandler = (e) => {
            e.preventDefault();

            post(route('products.store'));
        };


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create Product
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <form onSubmit={submit} className="p-6 text-gray-900 space-y-6">
                            <div>
                                <InputLabel htmlFor="name" value="name" />

                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('name', e.target.value)}
                                />

                                <InputError message={errors.name} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="description" value="description" />

                                <TextInput
                                    id="description"
                                    type="text"
                                    name="description"
                                    value={data.description}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('description', e.target.value)}
                                />

                                <InputError message={errors.description} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="price" value="price" />

                                <TextInput
                                    id="price"
                                    type="integer"
                                    name="price"
                                    value={data.price}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('price', e.target.value)}
                                />

                                <InputError message={errors.price} className="mt-2" />
                            </div>
                            <div>
                                <InputLabel htmlFor="category_id" value="category_id" />

                                <TextInput
                                    id="category_id"
                                    type="integer"
                                    name="category_id"
                                    value={data.category_id}
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    onChange={(e) => setData('category_id', e.target.value)}
                                />

                                <InputError message={errors.category_id} className="mt-2" />
                            </div>
                            <div>
                                <button
                                    type='submit'
                                    className='bg-yellow-500 duration-300 ease-in-out text-white px-6 py-2 rounded-lg hover:bg-yellow-700'>
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
