import { redirect, error } from '@sveltejs/kit';
import { generateUsername } from '$lib/utils';

export const actions = {
    signup: async ({ locals, request }) => {
        const body = Object.fromEntries(await request.formData());

        let username = generateUsername(body.name.split(' ').join('')).toLowerCase();

        try {
            await locals.pb.collection('users').create({
                username, ...body
            })
        } catch (err) {
            console.log(err);
            throw error(418, 'I am a teapot')
        }

        throw redirect(303, '/login');
    }
}