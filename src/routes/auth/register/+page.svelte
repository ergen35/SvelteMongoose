<script lang="ts">
	import type { IUser } from '$lib/models/user';
	import type { PageData } from './$types';

	export let data: PageData;

	let formData: IUser & { password: string } = {
		email: '',
		firstName: '',
		lastName: '',
		avatar: undefined,
		password: ''
	};

	async function registerUser() {
        alert("Ok")
    }
</script>

<style>
	:global(html){
		height: 100%;
	}

	:global(body){
		height: 100%;
		@apply bg-gray-50;
		display: flex;
		justify-content: center;
		align-items: center;
		align-content: center;	
		background-image: url(/oig4.jpeg);
		background-repeat: no-repeat;
		background-position: center;
		background-size: cover;
	}

</style>

<div class="rounded-lg  border border-red-200 border-t-0 p-5 bg-orange-200 shadow-md shadow-orange-400">
	<form on:submit={registerUser}>
		<div class="text-center mb-6 mt-2">
			<h3 class="text-2xl font-mono italic">Inscription</h3>
		</div>
		<div class="mb-4">
			<input type="email" class="input" placeholder="e-mail address" bind:value={formData.email} />
		</div>
		<div class="mb-4">
			<input type="text" class="input" placeholder="first name" bind:value={formData.firstName} />
		</div>
		<div class="mb-4">
			<input type="text" class="input" placeholder="last name" bind:value={formData.lastName} />
		</div>

		<button type="submit" class="px-3 py-2 bg-amber-600 rounded-sm shadow-lg  outline-1 text-white hover:bg-yellow-700">Inscription</button>
	</form>
</div>
