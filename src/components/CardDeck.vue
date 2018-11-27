<template>
<vue-swing @throwout="throwout" @throwin="throwin":config="config">
  <div class="box">Throw me!</div>
</vue-swing>
</template>

<script>
import VueSwing from 'vue-swing'
Vue.component('vue-swing', VueSwing)

// export default {
//     name: 'HelloWorld'
// }
    
</script>