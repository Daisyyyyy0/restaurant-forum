<template>
  <div id="restaurant-forum">
    <navbar/>
      <main role="main" class="mt-5 bg-white">
        <router-view/>
      </main>
  </div>
</template>

<script>
  import 'bootstrap'
  import 'bootstrap/dist/css/bootstrap.min.css'
  import navbar from './components/navbar'

  export default {
    components:{
      navbar,
    },
  }
  
</script>

<style>

</style>
