<script lang="ts">
	import { fade } from 'svelte/transition';
	import type { PageServerData } from './$types.d.ts';

	export let data: PageServerData;

    let loginData = {
        username: '',
        password: ''
    };

	let validationError = "";

    async function submitForm() {

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            body: JSON.stringify(loginData),
        });

        if(response.ok){
            window.location.assign('/about')
        }
        else {
			const body: {  error: string } = await response.json()
        
			if(body.error == 'invalid-data'){
				validationError = "Données Invalides"
			}
			if(body.error == 'invalid-user'){
				validationError = "Nom d'utilisateur ou mot de passe invalide"
			}
		}
    }
</script>

<div class="max-w-xl shadow-lg md:flex flex-row bg-gray-50 rounded-lg">
	<img
		src="/img_large2.webp"
		class="w-full h-40 md:w-1/2 md:h-full object-cover rounded-l-lg"
		height="500"
		width="500"
		alt=""
		srcset=""
	/>

	<form on:submit|preventDefault={submitForm}  class="p-4 flex flex-col items-center justify-center content-center">
		
		<div class="text-red-500 text-sm text-center">{validationError}</div>

		<h1 class="text-2xl font-bold text-gray-800 mb-2">Connexion</h1>

		<div class="mb-4">
			<label for="username" class="block text-gray-600">Nom d'Utilisateur</label>
			<input type="text" name="username" id="username" bind:value={loginData.username} class="input" />
		</div>

		<div class="mb-4">
			<label for="password" class="block text-gray-600">Mot de passe</label>
			<input type="password" name="password" id="password" bind:value={loginData.password} class="input" />
		</div>

		<button type="submit" class="btn-primary">Se Connecter</button>
		
		<div class="mt-5">
			<span class="text-sm">Pas de Compte ? <a href="/auth/register" class="text-indigo-600 text-lg">S'inscrire</a></span>
		</div>
	</form>

</div>

<style lang="postcss">
	:global(html) {
		height: 100%;
	}
	:global(body) {
		background-color: theme(colors.gray.200);
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		align-content: center;
	}
</style>
