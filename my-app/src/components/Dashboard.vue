<template>
  <div class="hello">
    <NavBar />
    <div class="container mrgnbtm">
          <div class="row">
            <div class="col-md-8">
                <CreateUser @createUser="userCreate($event)" />
            </div>
            <div class="col-md-4">
                <DisplayBoard :numberOfUsers="numberOfUsers" @getAllUsers="getAllUsers()" />
            </div>
          </div>
    </div>
    <div class="row mrgnbtm">
        <Users v-if="users.length > 0" :users="users" />
    </div>
  </div>
</template>

<script>
import CreateUser from './CreateUser.vue'
import DisplayBoard from './DisplayBoard.vue'
import Users from './Users.vue'
import { getAllUsers, createUser } from '../services/UserService'
import NavBar from './NavBar.vue'

export default {
  name: 'Dashboard',
  components: {
    CreateUser,
    DisplayBoard,
    Users,
    NavBar
  },
  data() {
      return {
          users: [],
          numberOfUsers: 0
      }
  },
  methods: {
    getAllUsers() {
      getAllUsers().then(response => {
        console.log(response)
        this.users = response
        this.numberOfUsers = this.users.length
      })
    },
    userCreate(data) {
      console.log('data:::', data)
      createUser(data).then(response => {
        console.log(response);
        this.getAllUsers();
      });
    }
  },
  mounted () {
    this.getAllUsers();
  }
}
</script>