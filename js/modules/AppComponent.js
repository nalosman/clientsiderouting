export default {
  template: `
    <section>
      <h1>This is the app page</h1>

      <form id="my-form">
        <label for="name">Enter your Name:</label>
        <input v-model="user" type="text" name="username" required placeholder="username"></input>

        <label for="password">Enter your Password:</label>
        <input v-model="password" type="password" name="password" required placeholder="password"></input>

        <input @click.prevent="submitUserData" type="submit" value="Sign Up/ Log In"></input>
      </form>
    </section>
  `,  

  data: function() {
    return {
      user: "",
      password: ""
    }
  },

  methods: {
    submitUserData() {
      //do fetch here using POST method
      //refer to the Node Mailer exmple from last se,ester as to
      //how to get data from a form into a fetch call using POST
      console.log('hit the API Pan is asking for, which should be in the root Vue instance');

      document.querySelector('form').reset();

      //reset username and password data in the app
      this.user = "";
      this.password = "";
    }
  },

  created: function() {
    console.log('our app component rendered');
  }
}