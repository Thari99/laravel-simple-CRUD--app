import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';

export default function Categories({category} : {category: {id: number, name: string, description: string} | null}) {

    const { data, setData, patch , processing, errors } = useForm({
        name: category?.name ?? "",
        description: category?.description ?? ""
  });

    const submit: FormEventHandler = (e) => {
            e.preventDefault();

            patch(route('categories.update', category?.id));
        };


    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Update Categories
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
                                <button
                                    type='submit'
                                    className='bg-yellow-500 duration-300 ease-in-out text-white px-6 py-2 rounded-lg hover:bg-yellow-700'>
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
