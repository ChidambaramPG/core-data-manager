/* eslint-disable */
<template>
	<div>
		<div class="account-pages"></div>

		<div class="wrapper-page">
	        <div class="card">
	            <div class="card-body">
	                <h3 class="text-center">
	                     <a href="index.html" class="logo">
							 <img src="assets/images/coredatalogo.png" height="50" alt="logo">
							<!-- <span style="font-size:50px;"><span style="font-size:50px;">C</span>CD</span> -->
						</a>
	                </h3>
	                <div class="p-3">
	                    <h4 class="text-muted font-18 m-b-5 text-center">Welcome Back !</h4>
	                    <p class="text-muted text-center">Sign in to continue to application.</p>
	                    <form class="form-horizontal m-t-30" action="index.html">
	                        <div class="form-group">
	                            <label for="username">Username</label>
	                            <input type="text" class="form-control" id="username" placeholder="Enter username" v-model='username'>
	                        </div>
	                        <div class="form-group">
	                            <label for="userpassword">Password</label>
	                            <input type="password" class="form-control" id="userpassword" placeholder="Enter password" v-model='password'>
	                        </div>
	                        <div class="form-group row m-t-20">
	                            <div class="col-6">
	                                <div class="custom-control custom-checkbox">
	                                    <input type="checkbox" class="custom-control-input" id="customControlInline">
	                                    <label class="custom-control-label" for="customControlInline">Remember me</label>
	                                </div>
	                            </div>
	                            <div class="col-6 text-right">
	                                <button class="btn btn-primary w-md waves-effect waves-light" type="submit" @click.prevent="loginAdmin">Log In</button>
	                            </div>
	                        </div>
	                        <div class="form-group m-t-10 mb-0 row">
	                            <div class="col-12 m-t-20">
	                                <a href="pages-recoverpw.html" class="text-muted"><i class="mdi mdi-lock"></i> Forgot your password?</a>
	                            </div>
	                        </div>
	                    </form>
	                </div>
	            </div>
	        </div>
	        <div class="m-t-40 text-center">
	            <p class="text-white-50">Don't have an account ? <a href="pages-register.html" class="text-white"> Signup Now </a> </p>
	        </div>
	    </div>
	</div>
    
</template>
<script>
import firebase from "firebase";
import router from "../router/index.js";
export default {
    name: "Login",
    data(){
    	return {
    		username:'',
    		password:'',
    		remember:false,
     		errorMessage: "",
     		loading: false,
    	}
    },
    methods: {
	    loginAdmin() {
			if(this.username == '' || this.password == ''){
				// alert('email or password is missing')
				this.errorMessage = 'email or password is missing';
				this.loading = false;

				}else{
				// console.log('signing in')
				firebase.auth().signInWithEmailAndPassword(this.username,this.password)
				.then(() => {
					// console.log(resp)
					this.loading = false;
					router.push("/dashboard");
				})
				.catch( error => {
					this.loading = false;

					let errorMessage = error.message;
					// this.errorMessage = errorMessage;    
					
					this.$swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: errorMessage,
						footer: '<a href>Signup if you are new user</a>'
					})

				})
				}
	     	
	    }
	  }
};
</script>
<style>
</style>