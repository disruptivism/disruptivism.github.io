import { redirect, error } from '@sveltejs/kit';

export const actions = {
    login: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData());

        try {
            await locals.pb.collection('users').authWithPassword(body.email, body.password);
        } catch (err) {
            console.log(err);
            throw error(418, 'I am a teapot')
        }

        throw redirect(303, '/');
    }
}