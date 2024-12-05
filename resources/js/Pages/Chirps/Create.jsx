import { useForm } from '@inertiajs/react';
import WYSIWYG from '../../Components/WYSIWYG';

export default function CreateChirp() {
    const { data, setData, post, processing } = useForm({
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('chirps.store'));
    };

    return (
        <form onSubmit={submit}>
            <WYSIWYG value={data.message} onChange={(value) => setData('message', value)} />
            <input
            type="file"
            accept="image/*,video/*"
            onChange={(e) => setData('media', e.target.files[0])}
            classname="block mt-4"
/>

            <button type="submit" disabled={processing}>
                Post
            </button>
        </form>
    );
}
