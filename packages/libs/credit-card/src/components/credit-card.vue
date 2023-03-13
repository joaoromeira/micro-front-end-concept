<template>
  <div
    id="container"
  >
  <div
    class="credit-card"
  >
    <div class="number">{{ number || '0000.0000.0000.0000' }}</div>
    <div>
      <div class="label">card holder</div>
      <div class="data">{{ name || 'Name' }}</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'CreditCard',
  props: {
    name: String,
    number: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container {  
  font-family: 'Arial';
  max-width: 100%;
  width: 380px;
}

.credit-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 150px;
  padding: 32px;
  border-radius: 12px;
  color: #ffffff;
  background: linear-gradient(to right bottom, #fd696b, #fa616e, #f65871, #f15075, #ec4879);
}

.label {
  font-size: 0.75rem;
  text-transform: uppercase;
  margin-bottom: 2px;
}
.data {
  font-size: 1rem;
  text-transform: uppercase;
}
.number {
  font-size: 2rem;
}
</style>