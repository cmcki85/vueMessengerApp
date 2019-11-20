<template>
	<div class="login">
		<b-jumbotron bg-variant="light" text-variant="dark">
			<template v-slot:header>
				<b-img
					center
					width="175"
					src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
				></b-img>
			</template>
			<b-row>
				<b-col lg="4" md="3"></b-col>
				<b-col lg="4" md="6">
					<h2 class="text-center">MessageVue</h2>
					<h6 class="text-center">
						- A Simple Vue Based Messenger -
					</h6>
					<hr />
				</b-col>
				<b-col lg="4" md="3"></b-col>
			</b-row>
		</b-jumbotron>
		<b-container>
			<b-row>
				<b-col lg="4" md="3"></b-col>
				<b-col lg="4" md="6">
					<LoginForm />
				</b-col>
				<b-col lg="4" md="3"></b-col>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import LoginForm from '@/components/loginForm.vue';

export default {
	name: 'login',
	components: {
		LoginForm,
	},
};
</script>
