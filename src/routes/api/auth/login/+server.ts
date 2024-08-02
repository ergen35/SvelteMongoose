import type { RequestHandler } from './$types';
import { type IUser } from '$lib/models/user';
import { User } from '$lib/models/user';

export const POST: RequestHandler = async ({ request }) => {

    let data: { username: string | undefined, password: string | undefined } = await request.json();

    if (data) {
        if (data.password && data.username) {

            const user = await User.findOne({ email: data.username }).exec();

            if (user) {
                // compare password hashes
                return new Response("Ok", { status: 200 })
            }
            else {
                return new Response(JSON.stringify({ message: "Bad Request", error: "invalid-user"  }), { status: 400 });
            }
        }
    }

    return new Response(JSON.stringify({ message: "Bad Request", error: "invalid-data"  }), { status: 400 });
};