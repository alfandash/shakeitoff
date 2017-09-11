<template lang="html">
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <img class="shake" src="../assets/logo-shake.png">
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <transition name="fade"><router-link to="/player1" class="btn btn-primary shake" v-if="show1">Player 1</router-link></transition>
          <router-link to="/watcher" class="btn btn-info shake">Referee</router-link>
          <transition name="fade"><router-link to="/player2" class="btn btn-danger shake" v-if="show2">Player 2</router-link></transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      player1: '',
      player2: '',
      show1: true,
      show2: true
    }
  },
  methods: {
    setPlayer () {
      this.$db.ref('play/').set({
        player2: '',
        player1: ''
      })
    }
  }
}
</script>

<style lang="css" scoped>
  .container {
    padding-top: 10px;
  }
  
  @-webkit-keyframes spaceboots {
	0% { -webkit-transform: translate(2px, 1px) rotate(0deg); }
	10% { -webkit-transform: translate(-1px, -2px) rotate(-1deg); }
	20% { -webkit-transform: translate(-3px, 0px) rotate(1deg); }
	30% { -webkit-transform: translate(0px, 2px) rotate(0deg); }
	40% { -webkit-transform: translate(1px, -1px) rotate(1deg); }
	50% { -webkit-transform: translate(-1px, 2px) rotate(-1deg); }
	60% { -webkit-transform: translate(-3px, 1px) rotate(0deg); }
	70% { -webkit-transform: translate(2px, 1px) rotate(-1deg); }
	80% { -webkit-transform: translate(-1px, -1px) rotate(1deg); }
	90% { -webkit-transform: translate(2px, 2px) rotate(0deg); }
	100% { -webkit-transform: translate(1px, -2px) rotate(-1deg); }
  }
  .shake:hover,
  .shake:focus {
  	-webkit-animation-name: spaceboots;
  	-webkit-animation-duration: 0.8s;
  	-webkit-transform-origin:50% 50%;
  	-webkit-animation-iteration-count: infinite;
  	-webkit-animation-timing-function: linear;
  }
  
  .fade-enter-active, .fade-leave-active {
  transition: opacity .5s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0
  }
</style>
